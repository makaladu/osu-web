// interfaces for using process.env
interface Process {
  env: ProcessEnv;
}

interface ProcessEnv {
  [key: string]: string | undefined;
}

declare var process: Process;

declare var window: Window;

// libraries
declare var laroute: any;
declare var Turbolinks: Turbolinks;

// our helpers
declare var tooltipDefault: TooltipDefault;
declare var osu: OsuCommon;
declare var currentUser: any;
declare var reactTurbolinks: any;
declare var userVerification: any;

// external (to typescript) classes
declare var BeatmapDiscussionHelper: BeatmapDiscussionHelperClass;
declare var LoadingOverlay: any;
declare var Timeout: any;

// Global object types
interface Comment {
  id: number;
}

interface BeatmapDiscussionHelperClass {
  url(options: any, useCurrent?: boolean): string;
}

interface JQueryStatic {
  subscribe: any;
  unsubscribe: any;
  publish: any;
}

interface OsuCommon {
  ajaxError: (xhr: JQueryXHR) => void;
  classWithModifiers: (baseName: string, modifiers?: string[]) => string;
  jsonClone: (obj: any) => any;
  parseJson: (id: string) => any;
  popup: (message: string, type: string) => void;
  presence: (str?: string | null) => string | null;
  promisify: (xhr: JQueryXHR) => Promise<any>;
  timeago: (time?: string) => string;
  trans: (...args: any[]) => string;
  transChoice: (key: string, count: number, replacements?: any, locale?: string) => string;
  urlPresence: (url?: string) => string;
  uuid: () => string;
  formatNumber(num: number, precision?: number, options?: Intl.NumberFormatOptions, locale?: string): string;
  formatNumber(num: null, precision?: number, options?: Intl.NumberFormatOptions, locale?: string): null;
}

interface Country {
  code?: string;
  name?: string;
}

interface Cover {
  id?: string;
  custom_url?: string;
  url?: string;
}

interface Score {
  id: string;
  mode: string;
  replay: boolean;
  user_id: number;
}

// TODO: should look at combining with the other User.ts at some point.
interface User {
  avatar_url?: string;
  country?: Country;
  country_code?: string;
  cover: Cover;
  default_group: string;
  id: number;
  is_active: boolean;
  is_bot: boolean;
  is_online: boolean;
  is_supporter: boolean;
  last_visit?: string;
  pm_friends_only: boolean;
  profile_colour?: string;
  unread_pm_count?: number;
  username: string;
}

interface TooltipDefault {
  remove: (el: HTMLElement) => void;
}

interface Turbolinks {
  visit: (url: string) => void;
}
