export const commaTestExercises = Array.from({ length: 100 }, (_, i) => ({
    aufgabe: `Übung ${i + 1}: Setze die Kommata an die richtigen Stellen.`,
    hinweis: "Denke an Nebensätze und Infinitivkonstruktionen.",
    sentences: [
      {
        words: ["Ich", "freue", "mich", "dass", "du", "gekommen", "bist"],
        correctIndexes: [3],
      },
      {
        words: ["Er", "sagte", "er", "wolle", "nicht", "kommen"],
        correctIndexes: [1],
      }, 
        {
          words: ["Ich", "glaube", "dass", "es", "morgen", "regnen", "wird"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "hat", "gesagt", "dass", "er", "nicht", "kommen", "konnte"],
          correctIndexes: [3],
        },
        {
          words: ["Wir", "essen", "jetzt", "weil", "wir", "hungrig", "sind"],
          correctIndexes: [3],
        },
        {
          words: ["Ich", "freue", "mich", "dass", "du", "mir", "hilfst"],
          correctIndexes: [3],
        },
        {
          words: ["Sie", "wollte", "nicht", "wissen", "wann", "wir", "starten"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "glaubte", "dass", "die", "Lösung", "einfach", "war"],
          correctIndexes: [3],
        },
        {
          words: ["Sie", "fährt", "nach", "Hause", "weil", "sie", "müde", "ist"],
          correctIndexes: [3, 6],
        },
        {
          words: ["Ich", "habe", "es", "verstanden", "dass", "dies", "eine", "gute", "Idee", "ist"],
          correctIndexes: [3, 5],
        },
        {
          words: ["Er", "hat", "gefragt", "ob", "wir", "am", "Abend", "essen", "gehen"],
          correctIndexes: [3, 7],
        },
        {
          words: ["Ich", "weiß", "nicht", "wann", "er", "wieder", "kommt"],
          correctIndexes: [3],
        },
        {
          words: ["Das", "ist", "der", "Grund", "warum", "ich", "gekommen", "bin"],
          correctIndexes: [4],
        },
        {
          words: ["Sie", "hat", "gesagt", "sie", "wolle", "nicht", "mehr", "bleiben"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "hat", "es", "probiert", "aber", "er", "konnte", "nicht", "gewinnen"],
          correctIndexes: [3],
        },
        {
          words: ["Ich", "habe", "den", "Film", "gesehen", "aber", "ich", "mag", "ihn", "nicht"],
          correctIndexes: [3, 7],
        },
        {
          words: ["Die", "Kinder", "spielen", "im", "Park", "weil", "sie", "es", "mögen"],
          correctIndexes: [3, 6],
        },
        {
          words: ["Er", "möchte", "wissen", "ob", "wir", "heute", "arbeiten"],
          correctIndexes: [3],
        },
        {
          words: ["Sie", "hat", "vergessen", "die", "Tür", "zu", "schließen"],
          correctIndexes: [3, 5],
        },
        {
          words: ["Ich", "werde", "nach", "Paris", "fliegen", "weil", "ich", "meine", "Freunde", "sehen", "möchte"],
          correctIndexes: [3, 6, 9],
        },
        {
          words: ["Er", "hat", "gesagt", "er", "wolle", "die", "Rechnung", "bezahlen"],
          correctIndexes: [3],
        },
        {
          words: ["Wir", "sind", "zu", "Hause", "geblieben", "weil", "es", "zu", "spät", "war"],
          correctIndexes: [3, 7],
        },
        {
          words: ["Er", "ist", "gestern", "gekommen", "weil", "er", "nicht", "arbeiten", "konnte"],
          correctIndexes: [3, 6],
        },
        {
          words: ["Ich", "habe", "vergessen", "meine", "Hausaufgaben", "zu", "machen"],
          correctIndexes: [3, 5],
        },
        {
          words: ["Wir", "haben", "es", "versucht", "aber", "wir", "haben", "nicht", "gewonnen"],
          correctIndexes: [3, 6],
        },
        {
          words: ["Ich", "denke", "dass", "dies", "eine", "gute", "Entscheidung", "ist"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "ist", "sehr", "schnell", "gefahren", "weil", "er", "zu", "spät", "war"],
          correctIndexes: [3, 7],
        },
        {
          words: ["Sie", "hat", "dich", "angerufen", "aber", "du", "warst", "nicht", "zu", "Hause"],
          correctIndexes: [3, 7],
        },
        {
          words: ["Er", "geht", "immer", "zur", "Arbeit", "zu", "Fuß", "weil", "er", "gesund", "bleiben", "möchte"],
          correctIndexes: [3, 6, 10],
        },
        {
          words: ["Ich", "wollte", "fragen", "ob", "du", "morgen", "kommen", "kannst"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "wusste", "nicht", "ob", "er", "aufhören", "sollte"],
          correctIndexes: [3],
        },
        {
          words: ["Wir", "haben", "die", "Antwort", "gefunden", "obwohl", "wir", "viel", "Zeit", "gebraucht", "haben"],
          correctIndexes: [4, 6],
        },
        {
          words: ["Sie", "war", "sehr", "zufrieden", "dass", "sie", "die", "Prüfung", "bestanden", "hat"],
          correctIndexes: [3],
        },
        {
          words: ["Ich", "habe", "nicht", "verstanden", "warum", "du", "es", "so", "gemacht", "hast"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "ist", "sehr", "kreativ", "aber", "er", "ist", "manchmal", "zu", "verträumt"],
          correctIndexes: [3, 6],
        },
        {
          words: ["Ich", "werde", "ins", "Büro", "gehen", "denn", "ich", "muss", "etwas", "arbeiten"],
          correctIndexes: [3],
        },
        {
          words: ["Es", "regnete", "die", "ganze", "Nacht", "deshalb", "habe", "ich", "nicht", "schlafen", "können"],
          correctIndexes: [4, 6],
        },
        {
          words: ["Ich", "habe", "meine", "Brille", "vergessen", "deshalb", "konnte", "ich", "nicht", "lesen"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "hat", "gesagt", "er", "werde", "morgen", "früh", "aufstehen"],
          correctIndexes: [3],
        },
        {
          words: ["Sie", "war", "sehr", "aufgeregt", "weil", "sie", "endlich", "den", "Job", "bekommen", "hatte"],
          correctIndexes: [3],
        },
        {
          words: ["Ich", "habe", "meine", "Schlüssel", "verloren", "und", "deshalb", "konnte", "ich", "nicht", "nach", "Hause", "gehen"],
          correctIndexes: [3, 6],
        },
        {
          words: ["Er", "ist", "gestern", "nach", "London", "geflogen", "um", "ein", "Meeting", "abzuhalten"],
          correctIndexes: [3],
        },
        {
          words: ["Wir", "haben", "uns", "entschieden", "nach", "dem", "Kino", "essen", "zu", "gehen"],
          correctIndexes: [3, 7],
        },
        {
          words: ["Ich", "glaube", "dass", "es", "wird", "bald", "schneien"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "möchte", "nicht", "essen", "weil", "er", "keinen", "Hunger", "hat"],
          correctIndexes: [3, 6],
        },
        {
          words: ["Ich", "bin", "sehr", "glücklich", "weil", "ich", "meine", "Ziele", "erreicht", "habe"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "war", "nicht", "da", "als", "wir", "gekommen", "sind"],
          correctIndexes: [3],
        },
        {
          words: ["Sie", "haben", "entschieden", "dass", "sie", "die", "Reise", "absagen", "werden"],
          correctIndexes: [3],
        },
        {
          words: ["Ich", "wollte", "fragen", "ob", "du", "die", "Hausaufgaben", "schon", "gemacht", "hast"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "geht", "ins", "Büro", "um", "seine", "Berichte", "abzuschließen"],
          correctIndexes: [3],
        },
        {
          words: ["Wir", "haben", "den", "Fehler", "nicht", "gesehen", "weil", "er", "sehr", "klein", "war"],
          correctIndexes: [3],
        },
        {
          words: ["Sie", "ist", "sehr", "besorgt", "weil", "sie", "ihre", "Prüfungen", "nicht", "bestehen", "wird"],
          correctIndexes: [3],
        },
        {
          words: ["Ich", "habe", "den", "Film", "gesehen", "aber", "ich", "finde", "ihn", "langweilig"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "hat", "gesagt", "dass", "er", "den", "Test", "bestehen", "wird"],
          correctIndexes: [3],
        },
        {
          words: ["Ich", "habe", "gearbeitet", "bis", "ich", "sehr", "müde", "wurde"],
          correctIndexes: [3],
        },
        {
          words: ["Wir", "fahren", "morgen", "nach", "Berlin", "um", "meine", "Freunde", "zu", "sehen"],
          correctIndexes: [3, 7],
        },
        {
          words: ["Er", "hat", "die", "Antwort", "gesucht", "weil", "er", "uns", "helfen", "wollte"],
          correctIndexes: [3, 6],
        },
        {
          words: ["Ich", "habe", "meine", "Karten", "zu", "Hause", "vergessen"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "hat", "gesagt", "er", "wird", "morgen", "früh", "aufstehen"],
          correctIndexes: [3],
        },
        {
          words: ["Sie", "haben", "entschieden", "nach", "dem", "Meeting", "zu", "essen"],
          correctIndexes: [3],
        },
        {
          words: ["Ich", "habe", "es", "nicht", "gewusst", "bis", "du", "mir", "es", "gesagt", "hast"],
          correctIndexes: [3, 7],
        },
        {
          words: ["Er", "fährt", "nach", "Hause", "weil", "er", "sich", "ausruhen", "möchte"],
          correctIndexes: [3, 6],
        },
        {
          words: ["Ich", "möchte", "nicht", "essen", "weil", "ich", "keinen", "Appetit", "habe"],
          correctIndexes: [3],
        },
        {
          words: ["Er", "sagte", "er", "konnte", "nicht", "kommen", "weil", "er", "sehr", "beschäftigt", "war"],
          correctIndexes: [3, 6],
        },
        {
          words: ["Wir", "haben", "eine", "gute", "Lösung", "gefunden", "nachdem", "wir", "lange", "diskutiert", "haben"],
          correctIndexes: [4, 6],
        }
      
      
    ],
  }));
  
  export const sentenceQuizExercises = Array.from({ length: 100 }, (_, i) => ({
    aufgabe: `Übung ${i + 1}: Fülle die Lücke mit der richtigen Option.`,
    hinweis: "Achte auf Grammatik und Zeitform.",
    quizzes: [
      {
        sentence: `Gestern habe ich ${i + 1} ___ gesehen.`,
        options: ["schnell", "schneller", "schnellsten"],
        correctAnswer: "schnell",
      },
    ],
  }));
  
  export const listeningExercises = Array.from({ length: 100 }, (_, i) => ({
    aufgabe: `Hörübung ${i + 1}: Höre dir das Audio an und fülle die Lücken.`,
    hinweis: "Konzentriere dich auf Aussprache und Betonung.",
    audioSrc: `/audio/exercise${i + 1}.mp3`, // Beispielpfad
    words: ["Hallo", "Welt", "das", "ist", "ein", "Test"],
  }));
  