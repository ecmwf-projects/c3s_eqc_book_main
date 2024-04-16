selector_to_html = {"a[href=\"#create-a-notebook-with-myst-markdown\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Create a notebook with MyST Markdown<a class=\"headerlink\" href=\"#create-a-notebook-with-myst-markdown\" title=\"Link to this heading\">#</a></h2><p>MyST Markdown notebooks are defined by two things:</p>", "a[href=\"#an-example-cell\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">An example cell<a class=\"headerlink\" href=\"#an-example-cell\" title=\"Link to this heading\">#</a></h2><p>With MyST Markdown, you can define code cells with a directive like so:</p>", "a[href=\"#quickly-add-yaml-metadata-for-myst-notebooks\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Quickly add YAML metadata for MyST Notebooks<a class=\"headerlink\" href=\"#quickly-add-yaml-metadata-for-myst-notebooks\" title=\"Link to this heading\">#</a></h2><p>If you have a markdown file and you\u2019d like to quickly add YAML metadata to it, so that Jupyter Book will treat it as a MyST Markdown Notebook, run the following command:</p>", "a[href=\"#notebooks-with-myst-markdown\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Notebooks with MyST Markdown<a class=\"headerlink\" href=\"#notebooks-with-myst-markdown\" title=\"Link to this heading\">#</a></h1><p>Jupyter Book also lets you write text-based notebooks using MyST Markdown.\nSee <a class=\"reference external\" href=\"https://jupyterbook.org/file-types/myst-notebooks.html\">the Notebooks with MyST Markdown documentation</a> for more detailed instructions.\nThis page shows off a notebook written in MyST Markdown.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
