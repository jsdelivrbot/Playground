(function() {
    'use strict';

    var data,
        lengthOfData,
        tree,
        map = {},
        mappedElem,
        node,
        rt = {},
        roots = [];

    function start() {
        init();

        displayData();
        createNodeMap();

        createTree();
        displayTree();
    }

    function init() {
        data = [{
            "Id": "1",
            "Name": "abc",
            "parent": ""
        }, {
            "Id": "2",
            "Name": "abc",
            "parent": "1"
        }, {
            "Id": "3",
            "Name": "abc",
            "parent": "2"
        }, {
            "Id": "4",
            "Name": "abc",
            "parent": "2"
        }, {
            "Id": "5",
            "Name": "abc",
            "parent": "3"
        }];

        tree = document.getElementsByClassName('tree')[0];
        lengthOfData = data.length;

        rt = {
            "root": []
        };

    }

    function displayData() {
        tree.innerHTML = JSON.stringify(data, undefined, 2);
    }

    function createNodeMap() {
        for (var i = 0; i < lengthOfData; i++) {
            node = data[i];
            map[node.Id] = node;
            map[node.Id].children = [];
        }

    }

    function createTree() {
        roots.push(rt);
        for (var id in map) {
            if (map.hasOwnProperty(id)) {
                mappedElem = map[id];
                if (mappedElem.parent !== "") {
                    map[mappedElem['parent']]['children'].push(mappedElem);
                } else {
                    roots[0]['root'].push(mappedElem);
                }
            }
        }
    }

    function displayTree() {
        setTimeout(function() {
            tree.innerHTML = JSON.stringify(roots, undefined, 2);
        }, 3000);
    }

    start();
})();
