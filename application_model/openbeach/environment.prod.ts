import packageJson  from '../../package.json';

export enum ConnectionMode {
  local = 'local',
  external = 'external'
}

export const environment = {
  production: true,
  appSignature: packageJson.appSignature,
  version: packageJson.version,
  releaseDate: packageJson.releaseDate,
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
    comment: 'ActiveId e AppId viene utilizzata solo quando l\'app gira in localhost oppure dentro al Capacitor',
    activeId: 'openbeach',
    customer: {
      openbeach: {
        name: 'openbeach',
        appId: 'CCBA34A5-24F5-4C22-8485-D891823E3434',
        urlId: 'openbeach.gouego.com',       
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
    defaultShopImage: 'assets/commercial/basketarticoli_small.png',
    stripePublishableKeyTest: 'pk_test_51S4IRkIHJIjc2k4Vj39amaoHAuqDUFrIiU06kP94Tlj1EqQ0B3rJJfjpk6unehqlfgT3EGN6T8VRMf5dfWo7stu000XvjRA9qJ',
    stripePublishableKeyLive: 'pk_live_51Ic8tPIe0jXIfPKjtAwn6GMbSruoMnLoCpkT5KewlNsuNzBW7sBqHU1tzyPaTlysVOXoc2O9uqi2x2cagvmbQ7oo00fwAoC7QN',
    
    merchantAppleIdentifier: 'merchant.com.gouego.openbeach',
    merchantName: 'Open Beach Group',
    pexelsApiKey: '0XajEaMhkj3MuXcGAi45ZT1hn1zyM2LNoKEcS5pDBLTVtMJNjsLisUIk' // Sostituisci con la tua API key di Pexels
  }   

};

export type ViewConfigs = 'desktop' | 'mobile' | null;

export type DebugMode = 'full' | 'minimal' | 'off';
