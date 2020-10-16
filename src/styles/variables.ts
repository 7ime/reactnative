export const FONTS = {
    os_bold: 'OpenSans-Bold',
    os_light: 'OpenSans-Light',
    os_regular: 'OpenSans-Regular',
    os_semi_bold: 'OpenSans-SemiBold',
}


export const SIZE = {
    radius: 3
}

export const COLORS = {
    transparent: 'transparent',
    white: '#ffffff',
    black: '#000000',
    purple: '#6861CE',
    orange: '#F5B405',
    yellow: '#FFDB4D',
    green: '#53B446',
    green_dark_50: '#007700',
    green_light_50: '#A3C293',
    green_light_10: '#FCFFF5',
    blue: '#1A73E8',
    blue_dark_50: '#26416C',
    blue_light_50: '#419FD9',
    blue_light_20: '#E3EDFD',
    blue_light_10: '#F7F7F7',
    red: '#F04D42',
    red_light_50: '#F2AB99',
    red_light_10: '#FFEFE9',
    grey: '#575962',
    grey_dark_100: '#222',
    grey_dark_50: '#3B455E',
    grey_light_70: '#8d9498',
    grey_light_50: '#dedede',
    grey_light_40: '#E0E1E2',
    grey_light_30: '#eaeaea',
    grey_light_20: '#F5F5F5',
    grey_light_10: '#F9FBFD',

    get default() {
        return this.grey_light_70
    },
    get primary() {
        return this.blue
    },
    get secondary() {
        return this.green
    },
    get warning() {
        return this.red
    },
    get text_c() {
        return this.grey_dark_100
    }
}
