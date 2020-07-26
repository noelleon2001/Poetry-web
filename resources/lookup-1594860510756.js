(function(window, undefined) {
  var dictionary = {
    "f04cfaf8-f5ea-4fef-a3a7-4542cd5f9295": "Themes",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "7028c585-5f39-4267-b02b-68f06b1ece6b": "Summary",
    "29deb89b-4318-45d0-b1db-f5fb821ef43a": "Context",
    "9c125250-d0bc-480c-942a-8def39ea424f": "Main Argument",
    "e76e7b7c-d8dc-4f92-9c22-25faddc433f5": "Biography",
    "6766b09b-3986-45d5-8185-fdec322d89c9": "Work Cited",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);