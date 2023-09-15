export enum ConnectionMode {
  local = 'local',
  external = 'external'
}


export const environment = {
  production: true,
  appSignature: '2316854354984354687654684698',
  version: "2.0.1",
  releaseDate: '2023-09-15',
  options: {
    debugMode: 'off' as DebugMode, //off, minimal, full
    overrideViewConfig: null as ViewConfigs, //Quale layout mostrare (desktop = Layout con menù, mobile = tabs, null = automatico)
  },  
  externalUrl: {
    alchimistilab: 'https://www.alchimistilab.it'
  },
  connection: {
    mode: ConnectionMode.external,
    comment: 'ActiveId e AppId viene utilizzata solo quando l\'app gira in localhost oppure dentro al Capacitor',
    activeId: 'beachforfun',
    customer: {
      openbeach: {
        appId: 'CCBA34A5-24F5-4C22-8485-D891823E3434',
        urlId: 'openbeach.gouego.com',
      },
      demo: {
        appId: '00F15A91-5395-445C-B7F4-5BA594E55D2F',
        urlId: 'demo.gouego.com',
      },
      beachforfun: {
        appId: 'E9682AA1-9E85-4D20-8A86-1A7FDBABF9A8',
        urlId: 'b4fnovara.gouego.com',
      },
      beachfuture: {
        appId: '240CFBD7-0C9F-4CE1-8996-0513EC7BBDE2',
        urlId: 'beachfuture.gouego.com',
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
  }   

};

export type ViewConfigs = 'desktop' | 'mobile' | null;

export type DebugMode = 'full' | 'minimal' | 'off';
