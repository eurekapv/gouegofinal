export const environment = {
  production: true,
  appSignature: '2316854354984354687654684698',
  version: "1.6",
  options: {
    debugMode: 'minimal' as DebugMode, //off, minimal, full
    overrideViewConfig: null as ViewConfigs, //Quale layout mostrare (desktop = Layout con menù, mobile = tabs, null = automatico)
  },  
  externalUrl: {
    alchimistilab: 'https://www.alchimistilab.it'
  }  

};

export type ViewConfigs = 'desktop' | 'mobile' | null;

export type DebugMode = 'full' | 'minimal' | 'off';
