# ig-klima-idee – barrierefreier Oktober-Newsletter

Statische HTML-Fassung des IG-Klima-Kürten-Newsletters Oktober 2026 für GitHub Pages.

## Zweck

- Inhalt aus der freigegebenen Druckfassung (LaTeX/PDF v14), unverändert
- Immer sichtbares Inhaltsverzeichnis (Sidebar Desktop, aufklappbare Navigation mobil)
- Orientierung an WCAG 2.2 AA: Semantik, Kontrast, Tastatur, Fokus, Skip-Link, Screenreader-Landmarks

## Dateien

- `index.html` – Seite mit allen Themen als Anker-Abschnitte
- `css/styles.css` – Layout und Darstellung
- `js/nav.js` – mobiles Menü (`aria-expanded`) und aktuelle Nav-Markierung
- `img/` – Bilder aus dem Newsletter (`bild01.jpg` … `bild08.jpg`)

## Lokal ansehen

Im Ordner dieser Site:

```bash
python3 -m http.server 8080
```

Dann im Browser `http://localhost:8080` öffnen.

Alternativ `index.html` direkt öffnen (Navigation und Anker funktionieren auch so).

## GitHub Pages

Repo: `dna-dieter/ig-klima-idee`. Inhalt dieses Ordners in den Branch für Pages legen (z. B. `main` Root oder `/docs`). In den Repo-Settings unter Pages die Quelle wählen. Veröffentlichen erst nach Freigabe durch den Owner.

## Themen-Anker

| ID | Thema |
|----|--------|
| `#editorial` | Editorial |
| `#waermepumpenparty` | Wärmepumpen-party in Bechen |
| `#e-auto-pv-speed-dating` | E-Auto- und Photovoltaik-Speed-Dating |
| `#buergersolarberatung` | BürgerSolarBeratung in Kürten |
| `#aktionsmonat-gebaeude` | Aktionsmonat Gebäude |
| `#energiewende-zu-teuer` | Ist die Energiewende zu teuer? |
| `#solar-boomt` | Solar boomt! Weltweit! |
| `#todeskampf-industrie` | Todeskampf der Industrie hat begonnen |
| `#gedenken-9-november` | Gedenken an die Opfer des 9. November |
