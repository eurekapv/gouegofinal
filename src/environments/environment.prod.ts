export enum ConnectionMode {
  local = 'local',
  external = 'external'
}


export const environment = {
  production: true,
  appSignature: '2316854354984354687654684698',
  version: "1.6",
  releaseDate: '2022-08-09',
  options: {
    debugMode: 'off' as DebugMode, //off, minimal, full
    overrideViewConfig: null as ViewConfigs, //Quale layout mostrare (desktop = Layout con menù, mobile = tabs, null = automatico)
  },  
  externalUrl: {
    alchimistilab: 'https://www.alchimistilab.it'
  },
  connection: {
    mode: ConnectionMode.external,
    comment: 'ActiveId e AppId viene utilizzata solo quando l\'app gira in localhost oppure dentro al Capacitor ',
    activeId: 'demo',
    appId: {
      openbeach: 'CCBA34A5-24F5-4C22-8485-D891823E3434',
      demo: '00F15A91-5395-445C-B7F4-5BA594E55D2F'
    },
    urlId: {
      openbeach: 'openbeach.gouego.com',
      demo: 'demo.gouego.com'
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
  }   

};

export type ViewConfigs = 'desktop' | 'mobile' | null;

export type DebugMode = 'full' | 'minimal' | 'off';
