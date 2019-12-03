export const KEY2CHAR = {
    Backquote: '`',
    Backslash: '\\',
    BracketLeft: '[',
    BracketRight: ']',
    Comma: ',',
    Digit0: '0',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Equal: '=',
    KeyA: 'a',
    KeyB: 'b',
    KeyC: 'c',
    KeyD: 'd',
    KeyE: 'e',
    KeyF: 'f',
    KeyG: 'g',
    KeyH: 'h',
    KeyI: 'i',
    KeyJ: 'j',
    KeyK: 'k',
    KeyL: 'l',
    KeyM: 'm',
    KeyN: 'n',
    KeyO: 'o',
    KeyP: 'p',
    KeyQ: 'q',
    KeyR: 'r',
    KeyS: 's',
    KeyT: 't',
    KeyU: 'u',
    KeyV: 'v',
    KeyW: 'w',
    KeyX: 'x',
    KeyY: 'y',
    KeyZ: 'z',
    Minus: '-',
    Period: '.',
    Quote: `'`,
    Semicolon: ';',
    Slash: '/'
};

export const CHAR2KEY = {
    0: 'Digit0',
    1: 'Digit1',
    2: 'Digit2',
    3: 'Digit3',
    4: 'Digit4',
    5: 'Digit5',
    6: 'Digit6',
    7: 'Digit7',
    8: 'Digit8',
    9: 'Digit9',
    '\'': 'Quote',
    ',': 'Comma',
    '-': 'Minus',
    '.': 'Period',
    '/': 'Slash',
    ';': 'Semicolon',
    '=': 'Equal',
    '[': 'BracketLeft',
    '\\': 'Backslash',
    ']': 'BracketRight',
    '`': 'Backquote',
    a: 'KeyA',
    b: 'KeyB',
    c: 'KeyC',
    d: 'KeyD',
    e: 'KeyE',
    f: 'KeyF',
    g: 'KeyG',
    h: 'KeyH',
    i: 'KeyI',
    j: 'KeyJ',
    k: 'KeyK',
    l: 'KeyL',
    m: 'KeyM',
    n: 'KeyN',
    o: 'KeyO',
    p: 'KeyP',
    q: 'KeyQ',
    r: 'KeyR',
    s: 'KeyS',
    t: 'KeyT',
    u: 'KeyU',
    v: 'KeyV',
    w: 'KeyW',
    x: 'KeyX',
    y: 'KeyY',
    z: 'KeyZ'
};

export class DmKey {
    cmd: boolean = false;
    alt: boolean = false;
    shift: boolean = false;
    key: string;

    constructor(from?: DmKey | string) {
        if (from instanceof DmKey) {
            this.cmd = from.cmd;
            this.alt = from.alt;
            this.shift = from.shift;
            this.key = from.key;
        }
        else if (typeof from === 'string') {
            const [key, modifiers] = from.split(':');
            if (key != null) {
                this.key = CHAR2KEY[key];
            }
            if (modifiers) {
                this.cmd = modifiers.includes('c');
                this.alt = modifiers.includes('a');
                this.shift = modifiers.includes('s');
            }
        }
    }

    match(e: KeyboardEvent): boolean {
        return e.altKey == this.alt
            && e.shiftKey == this.shift
            && (
                (this.cmd && (e.metaKey || e.ctrlKey)) || (!this.cmd && !e.metaKey && !e.ctrlKey)
            )
            && e.code == this.key;
    }

    asText(isMac = false): string {
        let m = '';
        if (this.cmd) {
            m = isMac ? 'Meta + ' : 'Ctrl + ';
        }
        if (this.alt) {
            m += 'Alt + ';
        }
        if (this.shift) {
            m += 'Shift + ';
        }
        const c = KEY2CHAR[this.key];
        return c ? m + c : '<None>';
    }

}
