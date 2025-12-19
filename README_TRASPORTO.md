# Sistema Gestione Spese di Trasporto

## Strategie Comuni nei Sistemi E-commerce

### 1. **Spese di Trasporto Basate su Peso/Dimensioni**
I grandi e-commerce (Amazon, eBay) usano principalmente questo sistema.

**Vantaggi:**
- Più preciso e giusto per il cliente
- Riflette i costi reali del corriere
- Permette calcoli automatici tramite API dei corrieri

**Implementazione:**
```javascript
// Tabella shipping_rules
{
  id: number,
  name: string,
  type: 'weight' | 'dimension' | 'items' | 'price' | 'fixed' | 'free',
  min_value: number,
  max_value: number,
  cost: number,
  country_code: string, // per gestire zone geografiche
  priority: number
}

// Aggiunta ai prodotti
product {
  id: number,
  name: string,
  price: number,
  weight_kg: number,        // peso in kg
  length_cm: number,        // dimensioni
  width_cm: number,
  height_cm: number,
  free_shipping: boolean    // override per prodotti specifici
}
```

### 2. **Spese di Trasporto Basate su Numero Pezzi**
Sistema semplice, usato da piccoli e-commerce

**Vantaggi:**
- Facile da capire per il cliente
- Semplice da gestire

**Svantaggi:**
- Poco preciso (1 libro ≠ 1 frigorifero)

**Implementazione:**
```javascript
shipping_rules {
  id: number,
  min_items: number,     // da 1 a 3 pezzi
  max_items: number,     // fino a 5 pezzi
  cost: number,          // 5€
  zone: string
}
```

### 3. **Spese Basate sul Valore del Carrello**
Molto comune, spesso combinato con altri metodi

**Vantaggi:**
- Incentiva acquisti maggiori
- "Spedizione gratuita sopra X€" è un ottimo marketing

**Implementazione:**
```javascript
shipping_rules {
  id: number,
  min_cart_value: number,    // 0€
  max_cart_value: number,    // 50€
  cost: number,              // 6.90€
  zone: string
}

// Esempio regole:
// 0-50€ → 6.90€
// 50-100€ → 3.90€
// 100€+ → Gratis
```

### 4. **Sistema Ibrido (CONSIGLIATO)**
Combina più fattori per massima flessibilità

```javascript
// Tabella principale shipping_zones
shipping_zones {
  id: number,
  name: string,              // "Italia", "Europa", "Resto del mondo"
  countries: string[],       // ["IT", "SM", "VA"]
  enabled: boolean
}

// Tabella metodi di spedizione
shipping_methods {
  id: number,
  zone_id: number,
  name: string,              // "Standard", "Express", "Corriere"
  carrier: string,           // "Poste", "GLS", "DHL"
  delivery_time_days: string, // "3-5 giorni"
  enabled: boolean
}

// Tabella regole di calcolo
shipping_rates {
  id: number,
  method_id: number,

  // CONDIZIONI (almeno una deve essere presente)
  condition_type: 'weight' | 'items' | 'price' | 'volume' | 'combined',

  // Per peso
  min_weight_kg: number,
  max_weight_kg: number,

  // Per numero articoli
  min_items: number,
  max_items: number,

  // Per valore carrello
  min_cart_value: number,
  max_cart_value: number,

  // Per volume (utile per prodotti ingombranti)
  min_volume_cm3: number,
  max_volume_cm3: number,

  // COSTO
  base_cost: number,         // costo fisso base
  per_kg_cost: number,       // costo aggiuntivo per kg
  per_item_cost: number,     // costo aggiuntivo per pezzo

  // FLAGS
  is_free: boolean,
  priority: number           // quale regola applicare se ne matchano più di una
}

// Estensione prodotto
products {
  // ... campi esistenti

  // Dati spedizione
  weight_kg: number,
  length_cm: number,
  width_cm: number,
  height_cm: number,

  // Override spese
  force_free_shipping: boolean,
  shipping_class_id: number  // per gestire categorie speciali (es: refrigerati)
}

// Classi di spedizione (opzionale, per casi speciali)
shipping_classes {
  id: number,
  name: string,              // "Refrigerato", "Fragile", "Pesante"
  surcharge: number,         // sovrapprezzo fisso
  surcharge_percent: number, // sovrapprezzo percentuale
  requires_special_carrier: boolean
}
```

## Logica di Calcolo (Algoritmo Suggerito)

```javascript
function calculateShipping(cart, deliveryAddress) {
  // 1. Determina la zona di spedizione
  const zone = getShippingZone(deliveryAddress.country);

  // 2. Calcola totali carrello
  const totals = {
    items: cart.items.length,
    weight: cart.items.reduce((sum, item) => sum + (item.weight_kg * item.quantity), 0),
    volume: cart.items.reduce((sum, item) =>
      sum + (item.length_cm * item.width_cm * item.height_cm * item.quantity), 0),
    value: cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  };

  // 3. Verifica se c'è spedizione gratuita forzata
  const hasFreeShipping = cart.items.some(item => item.force_free_shipping);
  if (hasFreeShipping) {
    return { cost: 0, method: 'free', reason: 'Prodotto con spedizione gratuita' };
  }

  // 4. Ottieni metodi disponibili per la zona
  const availableMethods = getShippingMethods(zone.id);

  // 5. Per ogni metodo, trova la regola applicabile
  const shippingOptions = [];

  for (const method of availableMethods) {
    const rates = getShippingRates(method.id);

    // Trova regola che matcha le condizioni (ordinata per priority)
    const matchingRate = rates.find(rate => {
      switch(rate.condition_type) {
        case 'weight':
          return totals.weight >= rate.min_weight_kg &&
                 totals.weight < rate.max_weight_kg;

        case 'items':
          return totals.items >= rate.min_items &&
                 totals.items <= rate.max_items;

        case 'price':
          return totals.value >= rate.min_cart_value &&
                 totals.value < rate.max_cart_value;

        case 'combined':
          // Valuta tutte le condizioni impostate
          return checkAllConditions(rate, totals);
      }
    });

    if (matchingRate) {
      let cost = matchingRate.base_cost;

      // Aggiungi costi variabili
      if (matchingRate.per_kg_cost) {
        cost += totals.weight * matchingRate.per_kg_cost;
      }
      if (matchingRate.per_item_cost) {
        cost += totals.items * matchingRate.per_item_cost;
      }

      // Applica sovrapprezzo per classe di spedizione
      const shippingClasses = cart.items
        .map(item => item.shipping_class_id)
        .filter(Boolean);

      if (shippingClasses.length > 0) {
        const maxSurcharge = Math.max(
          ...shippingClasses.map(classId =>
            getShippingClass(classId).surcharge
          )
        );
        cost += maxSurcharge;
      }

      shippingOptions.push({
        method: method.name,
        carrier: method.carrier,
        deliveryTime: method.delivery_time_days,
        cost: matchingRate.is_free ? 0 : cost,
        isFree: matchingRate.is_free
      });
    }
  }

  return shippingOptions;
}
```

## Esempi Pratici di Configurazione

### Esempio 1: E-commerce Semplice (Solo Italia)

```javascript
// 1 zona
zone: { name: "Italia", countries: ["IT"] }

// 1 metodo
method: { name: "Spedizione Standard", carrier: "Poste Italiane" }

// Regole basate sul valore
rates: [
  { min_cart_value: 0,   max_cart_value: 30,  base_cost: 5.90, is_free: false },
  { min_cart_value: 30,  max_cart_value: 60,  base_cost: 3.90, is_free: false },
  { min_cart_value: 60,  max_cart_value: null, base_cost: 0,   is_free: true }
]
```

### Esempio 2: E-commerce con Prodotti di Peso Variabile

```javascript
// Zone multiple
zones: [
  { name: "Italia", countries: ["IT"] },
  { name: "Europa", countries: ["FR", "DE", "ES", ...] }
]

// Metodi multipli
methods: [
  { name: "Standard", zone: "Italia", carrier: "Poste" },
  { name: "Express", zone: "Italia", carrier: "GLS" }
]

// Regole basate su peso
rates: [
  // Standard Italia
  { method: "Standard", min_weight: 0,   max_weight: 2,   base_cost: 4.90 },
  { method: "Standard", min_weight: 2,   max_weight: 5,   base_cost: 6.90 },
  { method: "Standard", min_weight: 5,   max_weight: 10,  base_cost: 9.90 },
  { method: "Standard", min_weight: 10,  max_weight: 30,  base_cost: 14.90 },

  // Express Italia (più caro)
  { method: "Express", min_weight: 0,   max_weight: 2,   base_cost: 8.90 },
  { method: "Express", min_weight: 2,   max_weight: 5,   base_cost: 12.90 },

  // Spedizione gratuita sopra 100€ (solo standard)
  { method: "Standard", min_cart_value: 100, base_cost: 0, is_free: true }
]
```

### Esempio 3: Sistema Complesso (Peso + Valore + Zone)

```javascript
rates: [
  // Piccoli pacchi - Italia
  {
    method_id: 1, // Standard Italia
    condition_type: 'combined',
    max_weight_kg: 2,
    base_cost: 4.90,
    per_kg_cost: 0
  },

  // Pacchi medi con sconto su carrello alto
  {
    method_id: 1,
    condition_type: 'combined',
    min_weight_kg: 2,
    max_weight_kg: 10,
    min_cart_value: 50,
    base_cost: 5.90,  // invece di 9.90
    per_kg_cost: 0.50
  },

  // Pacchi pesanti
  {
    method_id: 1,
    condition_type: 'weight',
    min_weight_kg: 10,
    base_cost: 12.00,
    per_kg_cost: 1.20
  }
]
```

## Come Procedono i Grandi Player

### **Amazon**
- Sistema ibrido peso/dimensioni/valore
- Zone geografiche dettagliate
- Abbonamento Prime con spedizione inclusa
- Calcolo in tempo reale tramite API corrieri

### **eBay**
- Il venditore imposta le regole
- Supporta tabelle di spedizione multiple
- Integrazione con servizi di shipping label

### **Shopify**
- Zone geografiche
- Tariffe basate su peso/prezzo/quantità
- Integrazione con corrieri per tariffe in tempo reale
- Possibilità di sovrapprezzo per prodotto

### **WooCommerce**
- Classi di spedizione per raggruppare prodotti
- Zone geografiche
- Metodi multipli (flat rate, free shipping, local pickup)
- Regole basate su condizioni combinate

## Raccomandazione Finale

**Per un sistema scalabile e professionale, suggerirei:**

1. **Struttura a 3 livelli:**
   - Zone geografiche (Italia, Europa, Mondo)
   - Metodi di spedizione (Standard, Express, Pickup)
   - Regole di calcolo (combinate: peso + valore)

2. **Logica ibrida:**
   - Base: calcolo per peso (più giusto)
   - Override: spedizione gratuita sopra X€ (marketing)
   - Special cases: prodotti con shipping class (fragili, refrigerati)

3. **Tabelle database:**
   ```
   shipping_zones (zone geografiche)
   shipping_methods (metodi per zona)
   shipping_rates (regole di calcolo)
   shipping_classes (categorie speciali - opzionale)

   // Aggiunte a products:
   - weight_kg
   - dimensions (L x W x H)
   - shipping_class_id (nullable)
   - force_free_shipping (boolean)
   ```

4. **API Endpoint:**
   ```
   POST /api/shipping/calculate
   Body: { cart, deliveryAddress }
   Response: [
     { method: "Standard", cost: 5.90, days: "3-5" },
     { method: "Express", cost: 9.90, days: "1-2" }
   ]
   ```

Questo sistema ti permette di:
- ✅ Iniziare semplice (solo Italia, regole base)
- ✅ Scalare facilmente (aggiungi zone, metodi, regole)
- ✅ Gestire casi speciali (prodotti fragili, grandi, ecc.)
- ✅ Integrare futuri servizi di corrieri in tempo reale
- ✅ Fare promozioni ("Spedizione gratis sopra 50€")

---

**Vuoi che ti prepari uno schema SQL completo o preferisci che ti aiuti con l'implementazione del calcolo lato backend?**
