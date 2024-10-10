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
    activeId: 'demo',
    customer: {     
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

export type ViewConfigs = 'desktop' | 'mobile' | null;

export type DebugMode = 'full' | 'minimal' | 'off';
