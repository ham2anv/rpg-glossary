# rpg-glossary
A web component for adding a glossary section to your page (suitable for game terms, etc.).

## Installing
Once you have the files, include a `<script>` element with a `src` attribute linking to the `rpg-glossary.js` on your site.

Wherever you have a term you want to include in your glossary, wrap it in a `<dfn>` element. Then follow it immediately with a `<span>` element with the `rpg-definition` class, containing the definition.

## rpg-glossary
The `<rpg-glossary />` element represents a glossary built from all of the terms you defined above. It takes a single, optional attribute: `css`, the path to a CSS file in which you write styles for the parts of the glossary.

The glossary consists of a `<details>` element, a `<summary>` element containing the word "Glossary", and a `<dl>` definition list. The list has a pair of `<dt>` and `<dd>` elements for each term you defined.