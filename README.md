# &lt;juicy-markdown&gt;

> Polymer Element with GitHub Flavored Markdown (GFM) viewer

## Demo

[Check it live!](http://Juicy.github.io/juicy-markdown)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install juicy-markdown --save
```

Or [download as ZIP](https://github.com/Juicy/juicy-markdown/archive/polymer_1.0.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/juicy-markdown/juicy-markdown.html">
    ```

3. Start using it!

    ```html
    <juicy-markdown value="# Markdown here"></juicy-markdown>
    ```

## Options

Attribute | Options  | Default | Description
---       | ---      | ---     | ---
`value`   | *string* | ``      | Markdown to render.
`ghcss`   | *boolean* | `false` | Should ghithub-markdown.css be imported?

## See also

 - [`<juicy-markdown-tabbededitor>`](https://github.com/Juicy/juicy-markdown-editor) - simple Markdown editor
 - [`<juicy-markdown-tabbededitor>`](https://github.com/Juicy/juicy-markdown-tabbededitor) - Markdown editor, with tabs like the one at GitHub.com

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/Juicy/juicy-markdown/releases).
