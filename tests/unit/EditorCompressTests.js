'use strict';

describe('EditorCompress', function() {
    var sut;
    beforeEach(
        function(){
            sut = new EditorCompress({zapGremlins:function(a){return a}});
        }
    )

    describe('compress', function() {
        it('should return compressed string', function(version) {
            var actual = sut.compress('hola petardaken');
            expect(actual).toEqual('aG9sYSUyMHBldGFyZGFrZW4=');
        });
    });
    describe('decompress', function() {
        it('should return correct string', function(version) {
            var actual = sut.decompress('aG9sYSUyMHBldGFyZGFrZW4=');
            expect(actual).toEqual('hola petardaken');
        });
    });

    describe('stringToBytes', function() {
        it('should return correct bytes', function(version) {
            var actual = sut.stringToBytes('hola petardaken');
            expect(actual).toEqual([ 104, 111, 108, 97, 32, 112, 101, 116, 97, 114, 100, 97, 107, 101, 110 ]);
        });
    });

    describe('bytesToString', function() {
        it('should return correct string', function(version) {
            var actual = sut.bytesToString([ 104, 111, 108, 97, 32, 112, 101, 116, 97, 114, 100, 97, 107, 101, 110 ]);
            expect(actual).toEqual('hola petardaken');
        });
    });
});
