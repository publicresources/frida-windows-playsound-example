const winmm = Module.load('winmm.dll');

const PlaySound = new NativeFunction(
    Module.getExportByName('winmm.dll', 'PlaySoundW'),
    'bool',
    ['pointer', 'pointer', 'uint32']
);




function stringToWideString(str) {
   const string = Memory.allocUtf16String(str)
    return string
}


const filePath = stringToWideString('C:\\Users\\user\\Downloads\\sound.wav');


console.log(filePath)

PlaySound(filePath, NULL, 0x00020000 | 0x0001);
