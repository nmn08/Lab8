const formatVolumeIconPath = require('../assets/scripts/main');

// function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
// }

describe('formatVolumeIconPath', () => {
    describe('Given volume > 66', () => {
        test('with a volume=100', () => {
            expect(formatVolumeIconPath(100)).toContain('3');
        });

        test('with a volume=85', () => {
            expect(formatVolumeIconPath(85)).toContain('3');
        });

        test('with a volume=67', () => {
            expect(formatVolumeIconPath(67)).toContain('3');
        });

        // test('with a random number', () => {
        //     var vol = randomInt(67,100);
        //     expect(formatVolumeIconPath(vol)).toContain('3');
        // });
    });

    describe('Given 33 < volume <= 66', () => {
        test('with a volume=66', () => {
            expect(formatVolumeIconPath(66)).toContain('2');
        });

        test('with a volume=50', () => {
            expect(formatVolumeIconPath(50)).toContain('2');
        });

        test('with a volume=34', () => {
            expect(formatVolumeIconPath(34)).toContain('2');
        });
        // test('with a random number', () => {
        //     var vol = randomInt(34,66);
        //     expect(formatVolumeIconPath(vol)).toContain('2');
        // });
    });

    describe('Given 0 < volume <= 33', () => {
        test('with a specific number 33', () => {
            expect(formatVolumeIconPath(33)).toContain('1');
        });

        test('with a volume=16', () => {
            expect(formatVolumeIconPath(16)).toContain('1');
        });

        test('with a volume=1', () => {
            expect(formatVolumeIconPath(1)).toContain('1');
        });
        // test('with a random number', () => {
        //     var vol = randomInt(1,33);
        //     expect(formatVolumeIconPath(vol)).toContain('1');
        // });
    });

    describe('Given volume=0', () => {
        test('with a specific number 0', () => {
            expect(formatVolumeIconPath(0)).toContain('0');
        });
    });
});