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
        sentence: `Gestern habe ich ___ gesehen.`,
        options: ["schnell", "schneller", "schnellsten"],
        correctAnswer: "schnell",
      },
      {
        sentence: `Er hat versucht, ___ zu antworten.`,
        options: ["richtig", "richtigster", "richtigsten"],
        correctAnswer: "richtig",
      },
      {
        sentence: `Wir gingen in den Park, weil es ___ war.`,
        options: ["sonnig", "sonniger", "sonnigsten"],
        correctAnswer: "sonnig",
      },
      {
        sentence: `Der Hund lief ___ durch den Garten.`,
        options: ["schnell", "schneller", "schnellsten"],
        correctAnswer: "schnell",
      },
      {
        sentence: `Heute ist der ___ Tag der Woche.`,
        options: ["erste", "erster", "erstens"],
        correctAnswer: "erste",
      },
      {
        sentence: `Sie kam ___ zu spät zur Arbeit.`,
        options: ["leider", "leiderer", "leidersten"],
        correctAnswer: "leider",
      },
      {
        sentence: `Wir konnten den Berg ___ erklimmen.`,
        options: ["leicht", "leichter", "leichtest"],
        correctAnswer: "leicht",
      },
      {
        sentence: `Er sagte, dass er ___ kommt.`,
        options: ["bald", "balder", "baldesten"],
        correctAnswer: "bald",
      },
      {
        sentence: `Das Auto fuhr ___ als erwartet.`,
        options: ["langsamer", "langsam", "langsamst"],
        correctAnswer: "langsamer",
      },
      {
        sentence: `Die Prüfung war ___ als letztes Jahr.`,
        options: ["einfacher", "einfach", "einfachst"],
        correctAnswer: "einfacher",
      },
      {
        sentence: `Die Blumen sind ___ schön.`,
        options: ["immer", "immere", "immersten"],
        correctAnswer: "immer",
      },
      {
        sentence: `Wir haben uns im Urlaub ___ entspannt.`,
        options: ["gut", "besser", "am besten"],
        correctAnswer: "gut",
      },
      {
        sentence: `Ich fand den Film ___ langweilig.`,
        options: ["ziemlich", "ziemlicher", "ziemlichst"],
        correctAnswer: "ziemlich",
      },
      {
        sentence: `Er lief so ___ wie möglich.`,
        options: ["schnell", "schneller", "schnellsten"],
        correctAnswer: "schnell",
      },
      {
        sentence: `Sie arbeitet ___ als ihr Kollege.`,
        options: ["härter", "hart", "hartest"],
        correctAnswer: "härter",
      },
      {
        sentence: `Das war der ___ Tag meines Lebens.`,
        options: ["schönste", "schönsten", "schönster"],
        correctAnswer: "schönste",
      },
      {
        sentence: `Die Antwort war ___ korrekt.`,
        options: ["absolut", "absolute", "absolutest"],
        correctAnswer: "absolut",
      },
      {
        sentence: `Ich finde, das ist ___ besser so.`,
        options: ["viel", "vieler", "vielfach"],
        correctAnswer: "viel",
      },
      {
        sentence: `Die Kinder spielen ___ im Garten.`,
        options: ["glücklich", "glücklicher", "glücklichsten"],
        correctAnswer: "glücklich",
      },
      {
        sentence: `Er ist ___ als ich.`,
        options: ["älter", "alt", "ältest"],
        correctAnswer: "älter",
      },
      {
        sentence: `Der Kuchen schmeckt ___ gut.`,
        options: ["sehr", "sehre", "am sehrsten"],
        correctAnswer: "sehr",
      },
      {
        sentence: `Wir sind ___ rechtzeitig angekommen.`,
        options: ["gerade", "gerader", "geradesten"],
        correctAnswer: "gerade",
      },
      {
        sentence: `Sie hat ___ auf die Frage geantwortet.`,
        options: ["klug", "klüger", "klugst"],
        correctAnswer: "klug",
      },
      {
        sentence: `Es ist ___ als gestern.`,
        options: ["kälter", "kalt", "kältest"],
        correctAnswer: "kälter",
      },
      {
        sentence: `Ich finde dieses Buch ___ spannend.`,
        options: ["unglaublich", "unglaublicher", "unglaublichsten"],
        correctAnswer: "unglaublich",
      },
      {
        sentence: `Die Sonne scheint heute ___ hell.`,
        options: ["besonders", "besonderer", "besonderst"],
        correctAnswer: "besonders",
      },
      {
        sentence: `Wir müssen ___ arbeiten, um rechtzeitig fertig zu werden.`,
        options: ["schneller", "schnell", "schnellst"],
        correctAnswer: "schneller",
      },
      {
        sentence: `Das war eine ___ Entscheidung.`,
        options: ["kluge", "kluger", "klugsten"],
        correctAnswer: "kluge",
      },
      {
        sentence: `Ich bin ___ froh, dass du hier bist.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
      },
      {
        sentence: `Er war ___ als wir ankamen.`,
        options: ["schon", "schoner", "schonsten"],
        correctAnswer: "schon",
      },
      {
        sentence: `Das Wasser war ___ als letztes Jahr.`,
        options: ["wärmer", "warm", "wärmsten"],
        correctAnswer: "wärmer",
      },
      {
        sentence: `Sie hat ___ viel Arbeit in das Projekt gesteckt.`,
        options: ["extrem", "extremer", "extremst"],
        correctAnswer: "extrem",
      },
      {
        sentence: `Wir liefen so ___ wie möglich.`,
        options: ["leise", "leiser", "leisesten"],
        correctAnswer: "leise",
      },
      {
        sentence: `Die Aufgabe war ___ einfach.`,
        options: ["ziemlich", "ziemlicher", "ziemlichst"],
        correctAnswer: "ziemlich",
      },
      {
        sentence: `Das war ___ aufregend.`,
        options: ["total", "totaler", "totalst"],
        correctAnswer: "total",
      },
      {
        sentence: `Er hat die Situation ___ gemeistert.`,
        options: ["perfekt", "perfekter", "perfektest"],
        correctAnswer: "perfekt",
      },
      {
        sentence: `Ich bin ___ zufrieden mit dem Ergebnis.`,
        options: ["sehr", "sehre", "sehrsten"],
        correctAnswer: "sehr",
      },
      {
        sentence: `Wir haben uns ___ amüsiert.`,
        options: ["herrlich", "herrlicher", "herrlichsten"],
        correctAnswer: "herrlich",
      },
      {
        sentence: `Er ist ___ talentiert.`,
        options: ["unglaublich", "unglaublicher", "unglaublichsten"],
        correctAnswer: "unglaublich",
      },
      {
        sentence: `Das Wetter war ___ besser als erwartet.`,
        options: ["deutlich", "deutlicher", "deutlichst"],
        correctAnswer: "deutlich",
      },
      {
        sentence: `Ich bin ___ stolz auf dich.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
      },
      {
        sentence: `Ich bin ___ glücklich, dich zu sehen.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Sie ist ___ nett zu mir.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Er ist ___ gut in Mathematik.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das war ___ ein toller Abend.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Wir haben ___ lange darauf gewartet.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das Essen war ___ lecker.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich finde diesen Film ___ spannend.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ihr Hund ist ___ süß.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das war ___ ein harter Tag.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich bin ___ froh, dass du hier bist.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Er hat ___ gute Noten bekommen.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das war ___ eine schwierige Prüfung.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Sie ist ___ schön.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Du bist ___ nett.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Es war ___ ein schöner Tag.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich habe ___ viel gearbeitet.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das war ___ eine unerwartete Wendung.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Er ist ___ ein erfahrener Lehrer.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das war ___ eine tolle Leistung.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Es ist ___ schön hier.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Du hast ___ gut gespielt.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich habe ___ viel zu tun.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das war ___ eine überraschende Wendung.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich bin ___ froh, dich kennenzulernen.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Die Aussicht war ___ beeindruckend.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Es ist ___ kalt draußen.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich finde den Film ___ langweilig.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Die Party war ___ lustig.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich war ___ erschöpft nach dem Training.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Sie hat ___ viel für das Projekt getan.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Du hast ___ hart gearbeitet.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das war ___ ein überraschendes Ergebnis.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich habe ___ viel gelernt.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Wir sind ___ aufgeregt, dass du kommst.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das war ___ ein großer Erfolg.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Die Aussicht von hier oben ist ___ atemberaubend.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Er ist ___ ein guter Freund.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Wir haben ___ lange gewartet.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Die Lösung ist ___ einfach.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das war ___ ein emotionaler Moment.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich bin ___ froh, dass du mir hilfst.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Die Aufgabe war ___ schwierig.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Es war ___ ein schöner Abend.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich finde den Vorschlag ___ gut.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Du hast ___ recht.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Die Aussicht war ___ spektakulär.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Er ist ___ ein hervorragender Koch.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich bin ___ stolz auf dich.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Es war ___ ein langer Tag.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Die Musik war ___ schön.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Der Film war ___ spannend.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich habe ___ viel zu lernen.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das war ___ eine tolle Idee.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Der Test war ___ einfach.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Sie hat ___ gute Arbeit geleistet.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das war ___ ein wunderschöner Tag.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Ich habe ___ viel über das Thema erfahren.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Der Vortrag war ___ interessant.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Das Essen war ___ gut.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    {
        sentence: `Der Film hat mich ___ bewegt.`,
        options: ["wirklich", "wirklicher", "wirklichst"],
        correctAnswer: "wirklich",
    },
    
    ],
  }));
  
  export const listeningExercises = [
    [
      {
          aufgabe: "Hörübung 6: Höre dir das Audio an und fülle die Lücken.",
          hinweis: "Achte auf Wörter mit der Endung -heit oder -keit.",
          audioSrc: "/audio/exercise6.mp3",
          words: ["Freiheit", "Ehrlichkeit", "Klarheit", "Möglichkeit", "Wahrheit"]
      },
      {
          aufgabe: "Hörübung 7: Höre dir das Audio an und fülle die Lücken.",
          hinweis: "Konzentriere dich auf Wörter mit ck und k.",
          audioSrc: "/audio/exercise7.mp3",
          words: ["Glück", "Backen", "Jacke", "Paket", "Stock"]
      },
      {
          aufgabe: "Hörübung 8: Höre dir das Audio an und fülle die Lücken.",
          hinweis: "Achte auf die Groß- und Kleinschreibung von Nomen.",
          audioSrc: "/audio/exercise8.mp3",
          words: ["Haus", "Baum", "Freundschaft", "Hund", "Buch"]
      },
      {
          aufgabe: "Hörübung 9: Höre dir das Audio an und fülle die Lücken.",
          hinweis: "Achte auf Wörter mit ß und ss. Schreibe sie genau auf.",
          audioSrc: "/audio/exercise9.mp3",
          words: ["Straße", "Fluss", "Gruß", "dass", "Fuß"]
      },
      {
          aufgabe: "Hörübung 10: Höre dir das Audio an und fülle die Lücken.",
          hinweis: "Höre genau auf Wörter, die ähnlich klingen, aber anders geschrieben werden.",
          audioSrc: "/audio/exercise10.mp3",
          words: ["mehr", "Meer", "Lied", "Leid", "Seite", "Saite"]
      },
      {
          aufgabe: "Hörübung 11: Höre dir das Audio an und fülle die Lücken.",
          hinweis: "Achte auf die Endungen -ig und -lich.",
          audioSrc: "/audio/exercise11.mp3",
          words: ["lustig", "herrlich", "freundlich", "mutig", "traurig"]
      },
      {
          aufgabe: "Hörübung 12: Höre dir das Audio an und fülle die Lücken.",
          hinweis: "Höre auf zusammengesetzte Wörter und schreibe sie korrekt auf.",
          audioSrc: "/audio/exercise12.mp3",
          words: ["Schulhof", "Wandtafel", "Blumenkasten", "Haustür", "Wintermantel"]
      },
      {
          aufgabe: "Hörübung 13: Höre dir das Audio an und fülle die Lücken.",
          hinweis: "Konzentriere dich auf Verben im Infinitiv und ihre richtige Schreibung.",
          audioSrc: "/audio/exercise13.mp3",
          words: ["laufen", "springen", "lesen", "schreiben", "kochen"]
      },
      {
          aufgabe: "Hörübung 14: Höre dir das Audio an und fülle die Lücken.",
          hinweis: "Höre auf Präpositionen und wie sie geschrieben werden.",
          audioSrc: "/audio/exercise14.mp3",
          words: ["durch", "gegen", "ohne", "um", "für"]
      },
      {
          aufgabe: "Hörübung 15: Höre dir das Audio an und fülle die Lücken.",
          hinweis: "Achte auf Verben, die im Präteritum gesprochen werden.",
          audioSrc: "/audio/exercise15.mp3",
          words: ["lief", "sang", "schrieb", "las", "trank"]
      }
  ]
  
  ];
  