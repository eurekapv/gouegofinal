import packageJson  from '../../package.json';

export enum ConnectionMode {
  local = 'local',
  external = 'external'
} 

export const environment = {
  production: false,
  appSignature: packageJson.appSignature,
  version: packageJson.version,
  releaseDate: '2024-07-08',
  options: {
    debugMode: 'full' as DebugMode, //off, minimal, full
    overrideViewConfig: null as ViewConfigs, //Quale layout mostrare (desktop = Layout con menù, mobile = tabs, null = automatico)
  },
  externalUrl: {
    alchimistilab: 'https://www.alchimistilab.it',
    stripemanager: 'https://stripemanager.oa.r.appspot.com',
  },
  connection: {
    mode: ConnectionMode.external,
    comment: 'ActiveId e AppId viene utilizzata solo quando l\'app gira in localhost oppure dentro al Capacitor ',
    activeId: 'openbeach',
    customer: {
      openbeach: {
        name: 'openbeach',
        appId: 'CCBA34A5-24F5-4C22-8485-D891823E3434',
        urlId: 'openbeach.gouego.com',
      },
      progettorieduca: {
        name: 'progettorieduca',
        appId: '130204BF-C4E7-4CF9-8101-C3B36E184D4B',
        urlId: 'progettorieduca.gouego.com',    
      },        
      beachforfun: {
        name: 'beachforfun',
        appId: 'E9682AA1-9E85-4D20-8A86-1A7FDBABF9A8',
        urlId: 'b4fnovara.gouego.com',
      },
      beachfuture: {
        name: 'beachfuture',
        appId: '240CFBD7-0C9F-4CE1-8996-0513EC7BBDE2',
        urlId: 'beachfuture.gouego.com',       
      },
      demo: {
        name: 'demo',
        appId: '00F15A91-5395-445C-B7F4-5BA594E55D2F',        
        urlId: 'demo.gouego.com',       
      },
    },
    urlLocation: {
      local: {
        urlProtocol: 'http',
        urlDomain: 'localhost/gouegoapi',
        urlFileServer: 'localhost/gouego'
      },
      production: {
        urlProtocol: 'https',
        urlDomain: 'api.gouego.com',
        urlFileServer: 'app.gouego.com/admin'
      }
    }
  },
  additionalConfig: {
    defaultShopImage: 'assets/commercial/basketarticoli_small.png'
  }
};

/*
Il nodo connection determina se ci si collega al server locale o esterno
In caso di 
  a) Connection Local
  b) Connection External ma con un url localhost (test con connessione esterna)
  c) No Web Mode (Capacitor)
  Verrà presa la chiave activeId per determinare la connessione dati da realizzare

*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

export type ViewConfigs = 'desktop' | 'mobile' | null;

export type DebugMode = 'full' | 'minimal' | 'off';
