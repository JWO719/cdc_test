# Evaluation von CDC Testing
Dieses Repository wird genutzt um das Beispielprojekt, das ich für meine Thesis entwickele,
versionieren zu können, aber auch um es der Öffentlichkeit als Einstieg in dieses Thema zur 
Verfügung zu stellen.

## Ziel
Ich beabsichtige ein kleines Beispiel Projekt zu implementieren. Anhand einer leichtgewichtigen
Architektur möchte ich bekannte Tools für CDC evaluieren und bewerten. Die Bewertung
erfolgt lediglich im Rahmen meiner Thesis. Mithilfe dieses Projektes möchte ich mich selbst in 
das Thema CDC einarbeiten und später mein erlangtes Wissen der Öffentlichkeit zur Verfügung stellen.

## Projektbeschreibung
Als Beispielprojekt habe ich mich für eine Bibliothekssoftware entschieden.
Der Nutzer soll alle zur Verfügung stehenden Bücher sehen und diese ausleihen können.
Um das ganze möglichst einfach zu halten wird es keine Nutzerverwaltung geben. 
Daraus folgt, dass lediglich die Information gespeichert wird, welches Buch ausgeliehen ist, nicht
wer welches Buch ausgeliehen hat.  

### Architektur
Ich werde zwei kleine REST-Services implementieren um so eine Microservice Architektur zu simulieren.
Zusätzlich wird es einen schlanken Client geben, der direkt mit beiden Services kommunizieren soll.
