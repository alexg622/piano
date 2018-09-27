This is a project that I made because I thought that it would be fun to create a little one octave piano out of divs, and then add keyup and down events to it so that the user can play the frequency of the notes on the keyboard.

To do this I made an audio context object that then created an oscillator. on the keydown press event the oscillator's frequency was set to the frequency of that key that was pressed, and then on the keyup event the frequency was set back to 0. the user also have the option to choose between four types of sounds.
