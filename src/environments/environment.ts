// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export enum ConnectionMode {
  local = 'local',
  external = 'external'
} 

export const environment = {
  production: false,
  version: "2.0.5",
  releaseDate: '2023-09-15',
  options: {
    debugMode: 'full' as DebugMode, //off, minimal, full
    overrideViewConfig: null as ViewConfigs, //Quale layout mostrare (desktop = Layout con menù, mobile = tabs, null = automatico)
  },
  externalUrl: {
    alchimistilab: 'https://www.alchimistilab.it'
  },
  connection: {
    mode: ConnectionMode.local,
    comment: 'ActiveId e AppId viene utilizzata solo quando l\'app gira in localhost oppure dentro al Capacitor ',
    activeId: 'demo',
    customer: {
      openbeach: {
        name: 'openbeach',
        appId: 'CCBA34A5-24F5-4C22-8485-D891823E3434',
        urlId: 'openbeach.gouego.com',
        admob: {
          ios: {
            enable: true,
            appId: 'ca-app-pub-8830190853167330~3634380910',
            bannerId: ['ca-app-pub-8830190853167330/5268431757']
          },
          md: {
            enable: true,
            appId: 'ca-app-pub-8830190853167330~6657249636',
            bannerId: ['ca-app-pub-8830190853167330/4665796524']  
          }
        }
      },
      demo: {
        name: 'demo',
        appId: '00F15A91-5395-445C-B7F4-5BA594E55D2F',
        urlId: 'demo.gouego.com',
        admob: {
          ios: {
            enable: false,
            appId: '',
            bannerId: []
          },
          md: {
            enable: false,
            appId: '',
            bannerId: []
          }          
        }        
      },
      beachforfun: {
        name: 'beachforfun',
        appId: 'E9682AA1-9E85-4D20-8A86-1A7FDBABF9A8',
        urlId: 'b4fnovara.gouego.com',
        admob: {
          ios: {
            enable: true,
            appId: 'ca-app-pub-8830190853167330~3997396892',
            bannerId: ['ca-app-pub-8830190853167330/9728521131']
          },
          md: {
            enable: true,
            appId: 'ca-app-pub-8830190853167330~9873621671',
            bannerId: ['ca-app-pub-8830190853167330/6876757393']  
          }
        }
      },
      beachfuture: {
        name: 'beachforfun',
        appId: '240CFBD7-0C9F-4CE1-8996-0513EC7BBDE2',
        urlId: 'beachfuture.gouego.com',
        admob: {
          ios: {
            enable: false,
            appId: '',
            bannerId: []
          },
          md: {
            enable: false,
            appId: '',
            bannerId: []  
          }
        }        
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
