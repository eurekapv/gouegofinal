// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export enum ConnectionMode {
  local = 'local',
  external = 'external'
} 

export const environment = {
  production: false,
  version: "1.6",
  releaseDate: '2022-09-09',
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
      localbeachforfun: {
        appId: '5842FD55-5FCF-4907-A55A-69BE55CD3E07',
        urlId: 'b4fnovara.gouego.com',
      }

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
