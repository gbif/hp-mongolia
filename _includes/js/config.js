/*
This is the fil in which you configure the data widgets. Feel free to experiment with the configuration options. 
But it is also completely okay to write and issue and ask for help to configure the widgets.
You probably want to check out the documentation at https://hp-theme.gbif-staging.org/documentation-intro
*/
var siteConfig = {
  "version": 3,
  "pages": [ // which pages do we want to enable
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "occurrenceKey"
    },
    {
      "id": "collectionSearch"
    },
    {
      "id": "collectionKey"
    },
    {
      "id": "datasetSearch"
    },
    {
      "id": "datasetKey"
    },
    {
      "id": "institutionSearch"
    },
    {
      "id": "institutionKey"
    },
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    // TODO: you should remove types you do not want to use
    "OCCURRENCE",
    "DATASET",
    "COLLECTION",
    "INSTITUTION",
    "LITERATURE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      "code": "da",
      "localeCode": "da",
      "label": "Dansk",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "dan",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "equals",
      "key": "country",
      "value": "MN"
    },
    "highlightedFilters": [
      "q",
      "taxonKey",
      "gadmGid", // administrative areas, i.e. the aimags
      "year",
      "basisOfRecord",
      "publishingOrg",
      "mediaType"
    ],
    "excludedFilters": [
      "country", // fixed by our scope, so filtering on it can only return the same or nothing
      "continent",
      "publishingCountry",
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "protocol"
    ],
    "defaultEnabledTableColumns": [
      "features",
      "year",
      "basisOfRecord",
      "stateProvince",
      "recordedBy",
      "datasetKey"
    ],
    "tabs": [
      "table",
      "gallery",
      "map",
      "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": 46.9,
      "lng": 103.8,
      "zoom": 4
    }
  },
  "collectionSearch": {
    excludedFilters: ['country', 'active'],
    // highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
    scope: {
      // Collections held by institutions in Mongolia (15 today)
      country: 'MN',
      active: true
    },
  },
  "institutionSearch": {
    excludedFilters: ['country', 'active'],
    // highlightedFilters: ['q', 'type'],
    // defaultTableColumns: ['title', 'type'],
    scope: {
      // Institutions registered in Mongolia (12 today)
      country: 'MN',
      active: true
    }
  },
  "datasetSearch": {
    excludedFilters: ['networkKey', 'projectId', 'hostingOrg'],
    highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
    scope: {
      // Datasets published FROM Mongolia. Note this is only 1 dataset today - dataset search can
      // only be scoped by publisher, there is no country-of-coverage filter, so the ~835 datasets
      // holding Mongolian records cannot be listed here. They are reachable through the datasetKey
      // filter on occurrence search instead.
      publishingCountry: 'MN'
    },
  },
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      // Literature either about Mongolia or by researchers based in Mongolia.
      // Literature search uses the predicate format, similar to occurrence search.
      "type": "or",
      "predicates": [
        {
          "type": "in",
          "key": "countriesOfCoverage",
          "values": [
            "MN"
          ]
        },
        {
          "type": "in",
          "key": "countriesOfResearcher",
          "values": [
            "MN"
          ]
        }
      ]
    },
    "highlightedFilters": [
      "q",
      "countriesOfCoverage",
      "countriesOfResearcher",
      "year"
    ]
  }
}
