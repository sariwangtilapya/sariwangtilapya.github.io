---
ob: "Herbe"
fty: 40
obffv: [["Potion", "Rend"], ["Potion +", "Rend"], ["Queue de Phénix", "Ressuscite"]]
---

<!doctype html>
<html>
  <head><title>{{ page.ob }}</title></head>
<body>
{{ page.ob }}

<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="a" value="50">
  +<input type="number" id="b" value="25">
  =<output name="x" for="a b"></output>
</form>


[['Herbe','Rend des HP','40 HP'], ['Pomme','Rend des HP','50 HP]]

<h3>Objets de soin</h3>

<table><tr><td>Nom</td><td>Description</td><td>Notes</td></tr>
<tr><td>Herbe</td><td>Description</td><td>40 HP</td></tr>
<tr><td>Pomme</td><td>Description</td><td>50 HP</td></tr>
<tr><td>{{ page.ob }}</td><td>Description</td><td>{{ page.fty }}</td></tr>
<!--comment-->
ob[0,0]
</table>

<table><tr><td>Nom</td><td>Effet</td></tr>


{% assign i = 0 %}
{% assign j = 0 %}
{% for i in page.obffv%}
<tr>
{% for j in page.obffv%}
<td>{{ page.obffv[i][j] }} </td>
{% assign j = j | plus:1 %}
{% endfor %}
</tr>
{% assign i = i | plus:1 %}
{% endfor %}

</table>
</body>
</html>

putain ! je veux juste un i++ c'est quoi cette espèce de for loop de connerie

## Welcome to GitHub Pages
mais c'est quoi ce bordel ! rien ne fucking marche !

You can use the [editor on GitHub](https://github.com/sariwangtilapya/sariwangtilapya.github.io/edit/main/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/sariwangtilapya/sariwangtilapya.github.io/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
