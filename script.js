function getClue() {
  const group = document.getElementById("groupNum").value;
  const clue = document.getElementById("clueNum").value; // <-- Add this line
  const passkey = document.getElementById("passkey").value.trim().toLowerCase();

  const clues = {
    1: [
      { text: "Clue 1: I am the finish of every chase,\nthe line that ends the field’s wide space.\nNo lock to guard, no door to close,\nyet I’m the prize each striker knows.", key: "allthebest" },
      { text: "Clue 2: My doors admit the curious, the ones who debug fear,\nhere syntax is king and semicolons cheer.\nTroubleshooters gather where the networks braid —\nthat is the room your clues have made.", key: "goal212" },
      { text: "Clue 3: Here glass reveals what eyes can’t see,\nfrom single cells to mystery.\nNot a library, yet knowledge grows,\nwhere nature hides and science shows.", key: "jmc505" },
      { text: "Clue 4: I’m not a tree, but I’m full of wood.\nI don’t speak, but I shape futures.\nWhere am I?", key: "life189" },
      { text: "Clue 5: I bubble without a mouth and hiss without a tongue,\nI sit on bunsen’s flame when experiments are young.\nClear or colored, in my belly mixtures meet —\nfind me on the bench where heat and liquids greet.\n(What am I?)", key: "pent231" },//
      { text: "Clue 6: I am designed to contain attention and direct thought,\nyet my walls absorb sound rather than amplify it.", key: "chem000" },
      { text: "Clue 7: Here, no tools hum and no screens glare,\nyet learning thrives in stillness, measured in chapters, not seconds.", key: "sem223" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "lib929" },
    ],
    2: [
      { text: "Clue 1: Near the gate where backpacks stream in,\n one small room keeps a list of late arrivals and lost umbrellas \n— where is this?", key: "allthebest" },
      { text: "Clue 2: No garden here, yet life is sown,\nin tiny worlds by glass made known.\nWhere drops of life in silence speak,\nthe answers hide for those who seek.", key: "man765" },
      { text: "Clue 3: I’m not a throne, yet many rest,\nTheir journeys paused, their minds a guest.\nmade of bamboo below the trees,\nFind me where the waits begin.", key: "life234" },
      { text: "Clue 4: An array of monitors stares like stars,\neach workstation an island with its own small Mars.\nWhere algorithms meet and programs play,\nenter the lab that greets the day.", key: "bus134" },
      { text: "Clue 5: I am a field both long and wide,\nyet a net divides my side from side.\nNot a war, yet battles play,\nwith leaps and dives through night and day.", key: "lab435" },
      { text: "Clue 6: I contain relics, photographs, and keepsakes,\neach item a portal to an era long past.", key: "volley321" },
      { text: "Clue 7:I am a platform for both grace and power,\nwhere preparation meets spontaneous expression.", key: "heri541" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "stage1" },
    ],
    3: [
      { text: "Clue 1: Two silent rings, suspended high,\nhold dreams that climb but often die.\nStep inside this bounded ground,\nwhere flight is earned without a sound.", key: "allthebest" },
      { text: "Clue 2: Count the vowels in “menu” and double them;\nthat number of steps from the main gate leads to the place of steam and ladles.", key: "bas365" },
      { text: "Clue 3: Here glass reveals what eyes can’t see,\nfrom single cells to mystery.\nNot a library, yet knowledge grows,\nwhere nature hides and science shows.", key: "can283" },
      { text: "Clue 4: I’m not a tree, but I’m full of wood.\nI don’t speak, but I shape futures.\nWhere am I?", key: "life189" },
      { text: "Clue 5: Large gatherings, structured observation, and sound clarity define me;\napplause is the only acknowledgment of my function.", key: "pent231" },
      { text: "Clue 6: Books are inside, but I am not;\nwisdom’s walls, I guard the spot.\nArms that stretch yet never tire,\nfind me where sky and campus conspire.", key: "torium" },
      { text: "Clue 7: I stand in the open, yet secrets I keep,\nNames and numbers in columns so neat.\nWhen exams arrive, I’m the crowd’s first sight—\nFind me where silence meets morning light.", key: "statue1" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "end129" },
    ],
    4: [
      { text: "Clue 1: Rows of faces glow but none will speak,\nkeys click in chorus though no fingers peek.\nhere logic dreams and programs wake,\nseek the room where circuits take.", key: "allthebest" },
      { text: "Clue 2: I send a straight bright tongue of light along a rail,\nlenses, mirrors, and slits obey my trail.Align me true and watch interference play —I live where beams and optics hold sway.(What am I?)", key: "lab164" },
      { text: "Clue 3: Here, no tools hum and no screens glare,\nyet learning thrives in stillness, measured in chapters, not seconds.", key: "phy202" },
      { text: "Clue 4: I bubble without a mouth and hiss without a tongue,\nI sit on bunsen’s flame when experiments are young.\nClear or colored, in my belly mixtures meet —\nfind me on the bench where heat and liquids greet.\n(What am I?)", key: "lib929" },
      { text: "Clue 5: No garden here, yet life is sown,\nin tiny worlds by glass made known.\nWhere drops of life in silence speak,\nthe answers hide for those who seek.", key: "chem000" },
      { text: "Clue 6: I am designed to contain attention and direct thought,\nyet my walls absorb sound rather than amplify it.", key: "life234" },
      { text: "Clue 7: I am the finish of every chase,\nthe line that ends the field’s wide space.\nNo lock to guard, no door to close,\nyet I’m the prize each striker knows.", key: "sem223" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign..", key: "goal212" },
    ],
    5: [
      { text: "Clue 1: I bubble without a mouth and hiss without a tongue,\nI sit on bunsen’s flame when experiments are young.\nClear or colored, in my belly mixtures meet —\nfind me on the bench where heat and liquids greet.\n(What am I?)", key: "allthebest" },
      { text: "Clue 2: Near the gate where backpacks stream in,\n one small room keeps a list of late arrivals and lost umbrellas \n— where is this?", key: "chem000" },
      { text: "Clue 3: I’m not a tree, but I’m full of wood.\nI don’t speak, but I shape futures.\nWhere am I?", key: "man765" },
      { text: "Clue 4: Two silent rings, suspended high,\nhold dreams that climb but often die.\nStep inside this bounded ground,\nwhere flight is earned without a sound.", key: "pent231" },
      { text: "Clue 5: Large gatherings, structured observation, and sound clarity define me;\napplause is the only acknowledgment of my function.", key: "bas365" },
      { text: "Clue 6: I contain relics, photographs, and keepsakes,\neach item a portal to an era long past.", key: "torium" },
      { text: "Clue 7: I am a platform for both grace and power,\nwhere preparation meets spontaneous expression.", key: "heri541" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "stage1" },
    ],
    6: [
      { text: "Clue 1: No garden here, yet life is sown,\nin tiny worlds by glass made known.\nWhere drops of life in silence speak,\nthe answers hide for those who seek", key: "allthebest" },
      { text: "Clue 2: . I’m not a throne, yet many rest,\nTheir journeys paused, their minds a guest.\nmade of bamboo below the trees,\nFind me where the waits begin", key: "life234" },
      { text: "Clue 3: Here glass reveals what eyes can’t see,\nfrom single cells to mystery.\nNot a library, yet knowledge grows,\nwhere nature hides and science shows.", key: "bus134" },
      { text: "Clue 4: Count the wels in “menu” and double them;\nthat number of steps from the main gate leads to the place of steam and ladles.", key: "life189" },
      { text: "Clue 5: I am a field both long and wide,\nyet a net divides my side from side.\nNot a war, yet battles play,\nwith leaps and dives through night and day.", key: "can283" },
      { text: "Clue 6: Books are inside, but I am not;\nwisdom’s walls, I guard the spot.\nArms that stretch yet never tire,\nfind me where sky and campus conspire.", key: "volley321" },
      { text: "Clue 7: I am designed to contain attention and direct thought,\nyet my walls absorb sound rather than amplify it.", key: "statue1" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "sem223" },
    ],
    7: [
      { text: "Clue 1: I split light into colors, tiny lines on a screen,\nwavelengths whisper secrets in patterns sharp and clean.\nRotate or swap me to see diffraction’s art\n —find me where spectra prove each photon’s part.(What am I?)", key: "allthebest" },
      { text: "Clue 2: I am four digits:\n•	XIV begins the tale.\n•	Double X, then remove one.\n•	End with the symbol of nothing.\nWhat number am I?", key: "phy202" },
      { text: "Clue 3: I am a platform for both grace and power,\nwhere preparation meets spontaneous expression.", key: "room14" },
      { text: "Clue 4: An array of monitors stares like stars,\neach workstation an island with its own small Mars.\nWhere algorithms meet and programs play,\nenter the lab that greets the day.", key: "stage1" },
      { text: "Clue 5: I am the finish of every chase,\nthe line that ends the field’s wide space.\nNo lock to guard, no door to close,\nyet I’m the prize each striker knows.", key: "lab435" },
      { text: "Clue 6: The first pair equals the result of (8+6).\nThe third digit equals the smallest odd prime.\nThe last digit equals the square root of nine.\n(Write digits in sequence.)", key: "goal212" },
      { text: "Clue 7: Large gatherings, structured observation, and sound clarity define me;\napplause is the only acknowledgment of my function.", key: "room13" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "torium" },
    ],
    8: [
      { text: "Clue 1:	Start with the two-digit count of days in two weeks.\nThen write the number of months in a year.\nPlace them together for the room.", key: "allthebest" },
      { text: "Clue 2: No garden here, yet life is sown,\nin tiny worlds by glass made known.\nWhere drops of life in silence speak,\nthe answers hide for those who seek.", key: "room12" },
      { text: "Clue 3: Two silent rings, suspended high,\nhold dreams that climb but often die.\nStep inside this bounded ground,\nwhere flight is earned without a sound.", key: "life234" },
      { text: "Clue 4: I am designed to contain attention and direct thought,\nyet my walls absorb sound rather than amplify it.", key: "bas365" },
      { text: "Clue 5: I stand in the open, yet secrets I keep,\nNames and numbers in columns so neat.When exams arrive,\nI’m the crowd’s first sight—Find me where silence meets morning light.", key: "sem223" },
      { text: "Clue 6: Here, no tools hum and no screens glare,\nyet learning thrives in stillness, measured in chapters, not seconds..", key: "end921" },
      { text: "Clue 7: Large gatherings, structured observation, and sound clarity define me;\napplause is the only acknowledgment of my function.", key: "lib929" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "torium" },
    ],
    9: [
      { text: "Clue 1: I contain relics, photographs, and keepsakes,\neach item a portal to an era long past.", key: "allthebest" },
      { text: "Clue 2: Here glass reveals what eyes can’t see,\nfrom single cells to mystery.\nNot a library, yet knowledge grows,\nwhere nature hides and science shows.", key: "heri541" },
      { text: "Clue 3: I’m not a throne, yet many rest,\nTheir journeys paused, their minds a guest.\nmade of bamboo below the trees,\nFind me where the waits begin.", key: "life189" },
      { text: "Clue 4: I am a field both long and wide,\nyet a net divides my side from side.\nNot a war, yet battles play,\nwith leaps and dives through night and day.", key: "bus134" },
      { text: "Clue 5: Count the wels in “menu” and double them;\nthat number of steps from the main gate leads to the place of steam and ladles..", key: "volley321" },
      { text: "Clue 6: You’ll hear a steady tapping, not of pens but fare —\nshort commands and clever scripts float in the air.\nWhere terminals gather and problems shrink,\nseek the place that makes machines think..", key: "can283" },
      { text: "Clue 7: I am the finish of every chase,\nthe line that ends the field’s wide space.\nNo lock to guard, no door to close,\nyet I’m the prize each striker knows.", key: "lab341" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "goal212" },
    ],
    10: [
      { text: "Clue 1: Professors speak, but I am still;my lesson’s love, not pen or quill.Where learning ends and nature starts,I wait with stone but open hearts.", key: "allthebest" },
      { text: "Clue 2: I wear a shield of glass and keep the air at bay,\nin me solids vanish slowly,\nor gases find their way.\nPut me on a tripod when you need the heat to climb\n—I hold the brew that measures change with time.(What am I?)", key: "statue1" },
      { text: "Clue 3: I am a platform for both grace and power,\nwhere preparation meets spontaneous expression.", key: "chem000" },
      { text: "Clue 4: No garden here, yet life is sown,\nin tiny worlds by glass made known.\nWhere drops of life in silence speak,\nthe answers hide for those who seek", key: "stage1" },
      { text: "Clue 5: Large gatherings, structured observation, and sound clarity define me;\napplause is the only acknowledgment of my function.", key: "life234" },
      { text: "Clue 6: I’m not a tree, but I’m full of wood.\nI don’t speak, but I shape futures.\nWhere am I?", key: "torium" },
      { text: "Clue 7: No chalk, no chalkboard, yet lessons run;\nsilicon pupils beam beneath the sun.\nPlug in your curiosity, press power, then ask —\nyou’ve found the place behind the glassy mask.", key: "pent231" },
      { text: "Clue 8:  Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "jmc505" },
    ],
    11: [
      { text: "Clue 1: Two silent rings, suspended high,\nhold dreams that climb but often die.\nStep inside this bounded ground,\nwhere flight is earned without a sound.", key: "allthebest" },
      { text: "Clue 2: I am designed to contain attention and direct thought,\nyet my walls absorb sound rather than amplify it.", key: "bas365" },
      { text: "Clue 3: Here glass reveals what eyes can’t see,\nfrom single cells to mystery.\nNot a library, yet knowledge grows,\nwhere nature hides and science shows.", key: "sem223" },
      { text: "Clue 4: Between the hostel block and the main gate\nsits a little room that hears goodbyes and keeps watch —\n what is it called?", key: "life189" },
      { text: "Clue 5: I am a hall without lecturers,\nyet I teach endlessly through arrangement and access.", key: "man765" },
      { text: "Clue 6: I know who sits and where they go,\nI know the time, the room, the row.\nBut I won’t speak unless you dare—\nTo peel the truth from printed glare.", key: "lib929" },
      { text: "Clue 7: Not a library of pages worn or curled,\nbut a quieter library for the digital world.\nLog in, compile, and watch the output gleam —\nthe place that teaches bytes to dream.", key: "end921" },
      { text: "Clue 8:  Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "lab164" },
    ],
    12: [
      { text: "Clue 1: I am designed to contain attention and direct thought,\nyet my walls absorb sound rather than amplify it.", key: "allthebest" },
      { text: "Clue 2: No garden here, yet life is sown,\nin tiny worlds by glass made known.\nWhere drops of life in silence speak,\nthe answers hide for those who seek.", key: "sem223" },
      { text: "Clue 3: Large gatherings, structured observation, and sound clarity define me;\napplause is the only acknowledgment of my function.", key: "life234" },
      { text: "Clue 4: I’m not a throne, yet many rest,\nTheir journeys paused, their minds a guest.\nmade of bamboo below the trees,\nFind me where the waits begin.", key: "torium" },
      { text: "Clue 5: I am a field both long and wide,\nyet a net divides my side from side.\nNot a war, yet battles play,\nwith leaps and dives through night and day.", key: "bus134" },
      { text: "Clue 6: I contain relics, photographs, and keepsakes,\neach item a portal to an era long past.", key: "volley321" },
      { text: "Clue 7: I’m numbered like a family, square on a wall,\neach little box a member that scientists call.\nMetals and gases, nonmetals and more,\nfind me where students learn my table of lore.\n(What am I?)", key: "heri541" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "chem000" },
    ],
    13: [
      { text: "Clue 1: Count the wels in “menu” and double them;\nthat number of steps from the main gate leads to the place of steam and ladles..", key: "allthebest" },
      { text: "Clue 2: My doors admit the curious, the ones who debug fear,\nhere syntax is king and semicolons cheer.\nTroubleshooters gather where the networks braid —\nthat is the room your clues have made.", key: "can283" },
      { text: "Clue 3: Here glass reveals what eyes can’t see,\nfrom single cells to mystery.\nNot a library, yet knowledge grows,\nwhere nature hides and science shows.", key: "jmc505" },
      { text: "Clue 4: I am a platform for both grace and power,\nwhere preparation meets spontaneous expression..", key: "life189" },
      { text: "Clue 5: Start with the two-digit count of days in two weeks.\nThen write the number of months in a year.\nPlace them together for the room.", key: "stage1" },
      { text: "Clue 6: Two silent rings, suspended high,\nhold dreams that climb but often die.\nStep inside this bounded ground,\nwhere flight is earned without a sound.", key: "room12" },
      { text: "Clue 7: I am the bridge between a scholar’s present and a professional’s tomorrow,\nquietly shaping the leap across.", key: "bas365" },
      { text: "Clue 8:  Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "place" },
    ],
    14: [
      { text: "Clue 1: I am the quiet vault of results,\nwhere effort transforms into records.", key: "allthebest" },
      { text: "Clue 2: Large gatherings, structured observation, and sound clarity define me;\napplause is the only acknowledgment of my function.", key: "exam" },
      { text: "Clue 3: I am a hall without lecturers,\nyet I teach endlessly through arrangement and access.", key: "torium" },
      { text: "Clue 4: I stand in the open, yet secrets I keep,\nNames and numbers in columns so neat.\nWhen exams arrive, I’m the crowd’s first sight—\nFind me where silence meets morning light.", key: "lib929" },
      { text: "Clue 5: I split light into colors, tiny lines on a screen,\nwavelengths whisper secrets in patterns sharp and clean.\nRotate or swap me to see diffraction’s art\n —find me where spectra prove each photon’s part.(What am I?).", key: "end129" },
      { text: "Clue 6: I am a platform for both grace and power,\nwhere preparation meets spontaneous expression...", key: "phy202" },
      { text: "Clue 7: An array of monitors stares like stars,\neach workstation an island with its own small Mars.\nWhere algorithms meet and programs play,\nenter the lab that greets the day.", key: "stage1" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "lab435" },
    ],
    15: [
      { text: "Clue 1: Large gatherings, structured observation, and sound clarity define me;\napplause is the only acknowledgment of my function.", key: "allthebest" },
      { text: "Clue 2: Here glass reveals what eyes can’t see,\nfrom single cells to mystery.\nNot a library, yet knowledge grows,\nwhere nature hides and science shows.", key: "torium" },
      { text: "Clue 3: I contain relics, photographs, and keepsakes,\neach item a portal to an era long past.", key: "life189" },
      { text: "Clue 4: I am a field both long and wide,\nyet a net divides my side from side.\nNot a war, yet battles play,\nwith leaps and dives through night and day.", key: "heri541" },
      { text: "Clue 5: Count the vowels in “menu” and double them;\nthat number of steps from the main gate leads to the place of steam and ladles...", key: "volley321" },
      { text: "Clue 6: I am four digits:\n•	XIV begins the tale.\n•	Double X, then remove one.\n•	End with the symbol of nothing.\nWhat number am I?", key: "can283" },
      { text: "Clue 7: I am a platform for both grace and power,\nwhere preparation meets spontaneous expression...", key: "room14" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "stage1" },
    ],
    16: [
      { text: "Clue 1: I’m not a throne, yet many rest,\nTheir journeys paused, their minds a guest.\nmade of bamboo below the trees,\nFind me where the waits begin.", key: "allthebest" },
      { text: "Clue 2: An array of monitors stares like stars,\neach workstation an island with its own small Mars.\nWhere algorithms meet and programs play,\nenter the lab that greets the day.", key: "bus134" },
      { text: "Clue 3: No garden here, yet life is sown,\nin tiny worlds by glass made known.\nWhere drops of life in silence speak,\nthe answers hide for those who seek.", key: "lab435" },
      { text: "Clue 4: The first pair equals the result of (8+6).\nThe third digit equals the smallest odd prime.\nThe last digit equals the square root of nine.\n(Write digits in sequence.)", key: "life234" },
      { text: "Clue 5: Two silent rings, suspended high,\nhold dreams that climb but often die.\nStep inside this bounded ground,\nwhere flight is earned without a sound.", key: "room13" },
      { text: "Clue 6: I am a platform for both grace and power,\nwhere preparation meets spontaneous expression...", key: "bas365" },
      { text: "Clue 7: I’m not a tree, but I’m full of wood.\nI don’t speak, but I shape futures.\nWhere am I?", key: "stage1" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "pent231" },
    ],
    17: [
      { text: "Clue 1: I am a hall without lecturers,\nyet I teach endlessly through arrangement and access.", key: "allthebest" },
      { text: "Clue 2: The first pair equals the result of (8+6).\nThe third digit equals the smallest odd prime.\nThe last digit equals the square root of nine.\n(Write digits in sequence.)", key: "lib929" },
      { text: "Clue 3: I am designed to contain attention and direct thought,\nyet my walls absorb sound rather than amplify it.", key: "room13" },
      { text: "Clue 4: I am the finish of every chase,\nthe line that ends the field’s wide space.\nNo lock to guard, no door to close,\nyet I’m the prize each striker knows.", key: "sem223" },
      { text: "Clue 5: Between the hostel block and the main gate\nsits a little room that hears goodbyes and keeps watch —\n what is it called?", key: "goal212" },
      { text: "Clue 6: I'm numbered like a family, square on a wall,\neach little box a member that scientists call.\nMetals and gases, nonmetals and more,\nfind me where students learn my table of lore.\n(What am I?)", key: "man765" },
      { text: "Clue 7: I stand in the open, yet secrets I keep,\nNames and numbers in columns so neat.\nWhen exams arrive, I’m the crowd’s first sight—\nFind me where silence meets morning light.", key: "chem000" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "end129" },
    ],
    18: [
      { text: "Clue 1: I know who sits and where they go,\nI know the time, the room, the row.\nBut I won’t speak unless you dare—\nTo peel the truth from printed glare", key: "allthebest" },
      { text: "Clue 2: An array of monitors stares like stars,\neach workstation an island with its own small Mars.\nWhere algorithms meet and programs play,\nenter the lab that greets the day.", key: "end921" },
      { text: "Clue 3: Large gatherings, structured observation, and sound clarity define me;\napplause is the only acknowledgment of my function.", key: "lab435" },
      { text: "Clue 4: I'm numbered like a family, square on a wall,\neach little box a member that scientists call.\nMetals and gases, nonmetals and more,\nfind me where students learn my table of lore.\n(What am I?)", key: "torium" },
      { text: "Clue 5: Two silent rings, suspended high,\nhold dreams that climb but often die.\nStep inside this bounded ground,\nwhere flight is earned without a sound.", key: "chem000" },
      { text: "Clue 6: I contain relics, photographs, and keepsakes,\neach item a portal to an era long past.", key: "bas365" },
      { text: "Clue 7: I am a platform for both grace and power,\nwhere preparation meets spontaneous expression...", key: "heri541" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "stage1" },
    ],
    19: [
      { text: "Clue 1:  My doors admit the curious, the ones who debug fear,\nhere syntax is king and semicolons cheer.\nTroubleshooters gather where the networks braid —\nthat is the room your clues have made.", key: "allthebest" },
      { text: "Clue 2:  Here glass reveals what eyes can’t see,\nfrom single cells to mystery.\nNot a library, yet knowledge grows,\nwhere nature hides and science shows.", key: "jmc505" },
      { text: "Clue 3:  I am a platform for both grace and power,\nwhere preparation meets spontaneous expression...", key: "life189" },
      { text: "Clue 4: Count the vowels in “menu” and double them;\nthat number of steps from the main gate leads to the place of steam and ladles...", key: "stage1" },
      { text: "Clue 5: Not in the dorms, not in the labs,\nnor where the chalk strikes board in jabs.\nWhere students cross and breezes meet,\na figure waits with steady feet.", key: "can283" },
      { text: "Clue 6: I am a field both long and wide,\nyet a net divides my side from side.\nNot a war, yet battles play,\nwith leaps and dives through night and day.", key: "statue1" },
      { text: "Clue 7: I am the finish of every chase,\nthe line that ends the field’s wide space.\nNo lock to guard, no door to close,\nyet I’m the prize each striker knows.", key: "volley321" },
      { text: "Clue 8: Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "goal212" },
    ],
    20: [
      { text: "Clue 1: Between the hostel block and the main gate\nsits a little room that hears goodbyes and keeps watch —\n what is it called?", key: "allthebest" },
      { text: "Clue 2: I am the finish of every chase,\nthe line that ends the field’s wide space.\nNo lock to guard, no door to close,\nyet I’m the prize each striker knows..", key: "man765" },
      { text: "Clue 3: I am designed to contain attention and direct thought,\nyet my walls absorb sound rather than amplify it.", key: "goal212" },
      { text: "Clue 4: I’m not a tree, but I’m full of wood.\nI don’t speak, but I shape futures.\nWhere am I?.", key: "sem223" },
      { text: "Clue 5: I am a hall without lecturers,\nyet I teach endlessly through arrangement and access.", key: "pent231" },
      { text: "Clue 6: I am four digits:\n•	XIV begins the tale.\n•	Double X, then remove one.\n•	End with the symbol of nothing.\nWhat number am I?", key: "lib929" },
      { text: "Clue 7: Large gatherings, structured observation, and sound clarity define me;\napplause is the only acknowledgment of my function.", key: "room14" },
      { text: "Clue 8:  Think of a dozen plus two, that’s the start.\nAdd two tens, then step one forward.\nYour result is the chamber’s sign.", key: "torium" },
    ],
  };

  const groupClues = clues[group];
  const clueObj = groupClues && groupClues[clue - 1];

  if (clueObj && clueObj.key === passkey) {
    document.querySelector(".input-section").style.display = "none";
    const clueBox = document.getElementById("clue");
    clueBox.style.display = "block";
    clueBox.classList.add("revealed");

    // Show loading animation
   clueBox.innerHTML = `
  <div class="treasure-loader"></div>
  <p style="margin-top: 20px; font-size: 22px;">🗺️ Searching for your clue...</p>
`;

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      clueBox.innerHTML = `
        <h2>🧩 Your Clue</h2>
        <p><strong>GROUP ${group}</strong></p>
        <p><strong>${clueObj.text}</strong></p>
      `;
  clueBox.addEventListener('contextmenu', e => e.preventDefault());
  clueBox.addEventListener('copy', e => e.preventDefault());
  clueBox.style.userSelect = 'none';
}, 1200);

  } else {
    alert("❌ Incorrect passkey or invalid input. Try again!");
  }

  document.addEventListener('DOMContentLoaded', () => {
  const clueBox = document.getElementById('clue');

  // Disable right-click
  clueBox.addEventListener('contextmenu', e => e.preventDefault());

  // Disable copy
  clueBox.addEventListener('copy', e => e.preventDefault());

  // Disable text selection
  clueBox.style.userSelect = 'none';
});
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'v')) {
    e.preventDefault();
  }
});
}
