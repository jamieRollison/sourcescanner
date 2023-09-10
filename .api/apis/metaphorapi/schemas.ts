const FindSimilar = {"body":{"type":"object","properties":{"url":{"type":"string","description":"The url for which you would like to find similar links","examples":["https://slatestarcodex.com/2014/07/30/meditations-on-moloch/"]},"numResults":{"type":"integer","description":"Number of search results to return. Default 10. Up to 30 for basic plans. Up to thousands for custom plans.","examples":[10]},"includeDomains":{"type":"array","items":{"type":"string"},"description":"An optional list of domain names to include in the search. If specified, results will only come from these domains.","examples":["example.com","sample.net"]},"excludeDomains":{"type":"array","items":{"type":"string"},"description":"An optional list of domain names to exclude from the search. If specified, results will not include any from these domains.","examples":["excludedomain.com","excludeme.net"]},"startCrawlDate":{"type":"string","format":"date-time","description":"The optional start date (inclusive) for the crawled data. Must be specified in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). The search will only include results crawled on or after this date.","examples":["2023-01-01"]},"endCrawlDate":{"type":"string","format":"date-time","description":"The optional end date (inclusive) for the crawled data. Must be specified in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). The search will only include results crawled on or before this date.","examples":["2023-12-31"]},"startPublishedDate":{"type":"string","format":"date-time","description":"The optional start date (inclusive) for the published data. Must be specified in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). The search will only include results published on or after this date.","examples":["2023-01-01"]},"endPublishedDate":{"type":"string","format":"date-time","description":"The optional end date (inclusive) for the published data. Must be specified in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). The search will only include results published on or before this date.","examples":["2023-12-31"]}},"required":["url"],"$schema":"http://json-schema.org/draft-04/schema#"},"response":{"200":{"type":"object","properties":{"results":{"type":"array","description":"A list of search results containing title, URL, published date, author, and score.","items":{"type":"object","properties":{"title":{"type":"string","description":"The title of the search result, typically representing the main heading of the content."},"url":{"type":"string","format":"uri","description":"The URL of the search result, which directs to the web page containing the relevant content."},"publishedDate":{"type":["string","null"],"description":"An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD. Nullable"},"author":{"type":["string","null"],"description":"If available, the author of the content. Nullable"},"score":{"type":["number","null"],"description":"A number from 0 to 1 representing similarity between the query/url and the result"},"id":{"type":"string","description":"The temporary ID for the document. Useful for /contents endpoint."}}}}},"$schema":"http://json-schema.org/draft-04/schema#"}}} as const
;
const GetContents = {"metadata":{"allOf":[{"type":"object","properties":{"ids":{"type":"array","items":{"type":"string"},"examples":["31gfpFb2i3Hbsm8nDE33YA","1aI5kUIO8VuLxT3db47cnM"],"$schema":"http://json-schema.org/draft-04/schema#","description":"An array of document IDs obtained from either /search or /findSimilar endpoints."}},"required":["ids"]}]},"response":{"200":{"type":"object","properties":{"contents":{"type":"array","description":"A list of document contents containing id, URL, title, and extract. In the future, we will support more content types.","items":{"type":"object","properties":{"id":{"type":"string","description":"The ID of the document."},"url":{"type":"string","format":"uri","description":"The URL of the document, which directs to the web page containing the content."},"title":{"type":"string","description":"The title of the document, typically representing the main heading of the content."},"extract":{"type":"string","description":"The first 1000 tokens of content in the document. This is designed for current language models to process."}}}}},"$schema":"http://json-schema.org/draft-04/schema#"}}} as const
;
const Search = {"body":{"type":"object","properties":{"query":{"type":"string","description":"The query string. On the web, people often recommend content - it's vital that the query takes the form of a declarative suggestion, where a high quality search result link would follow.","examples":["Here is an article about the state of search:"]},"numResults":{"type":"integer","description":"Number of search results to return. Default 10. Up to 30 for basic plans. Up to thousands for custom plans.","examples":[10]},"includeDomains":{"type":"array","items":{"type":"string"},"description":"List of domains to include in the search. If specified, results will only come from these domains. Only one of includeDomains and excludeDomains should be specified.","examples":["example.com","sample.net"]},"excludeDomains":{"type":"array","items":{"type":"string"},"description":"List of domains to exclude in the search. If specified, results will only come from these domains. Only one of includeDomains and excludeDomains should be specified.","examples":["excludedomain.com","excludeme.net"]},"startCrawlDate":{"type":"string","format":"date-time","description":"\"Crawl date\" refers to the date that Metaphor discovered a link, which is more granular and can be more useful than published date. If startCrawlDate is specified, results will only include links that were crawled after startCrawlDate. Must be specified in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)","examples":["2023-01-01"]},"endCrawlDate":{"type":"string","format":"date-time","description":"\"Crawl date\" refers to the date that Metaphor discovered a link, which is more granular and can be more useful than published date. If endCrawlDate is specified, results will only include links that were crawled before endCrawlDate. Must be specified in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)","examples":["2023-12-31"]},"startPublishedDate":{"type":"string","format":"date-time","description":"If specified, only links with a published date after startPublishedDate will be returned. Must be specified in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). Note that for some links, we have no published date, and these links will be excluded from the results if startPublishedDate is specified.","examples":["2023-01-01"]},"endPublishedDate":{"type":"string","format":"date-time","description":"If specified, only links with a published date before endPublishedDate will be returned. Must be specified in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). Note that for some links, we have no published date, and these links will be excluded from the results if endPublishedDate is specified.","examples":["2023-12-31"]},"useAutoprompt":{"type":"boolean","description":"If true, your query will be converted to a Metaphor query. Latency will be much higher. Default: false"},"type":{"type":"string","description":"The Type of search, 'keyword' or 'neural'. Default: neural"}},"required":["query"],"$schema":"http://json-schema.org/draft-04/schema#"},"response":{"200":{"type":"object","properties":{"results":{"type":"array","description":"A list of search results containing title, URL, published date, author, and score.","items":{"type":"object","properties":{"title":{"type":"string","description":"The title of the search result, typically representing the main heading of the content."},"url":{"type":"string","format":"uri","description":"The URL of the search result, which directs to the web page containing the relevant content."},"publishedDate":{"type":["string","null"],"description":"An estimate of the creation date, from parsing HTML content. Format is YYYY-MM-DD. Nullable"},"author":{"type":["string","null"],"description":"If available, the author of the content. Nullable"},"score":{"type":["number","null"],"description":"A number from 0 to 1 representing similarity between the query/url and the result"},"id":{"type":"string","description":"The temporary ID for the document. Useful for /contents endpoint."}}}},"autopromptString":{"type":"string","description":"The Metaphor query created by the autoprompt functionality."}},"$schema":"http://json-schema.org/draft-04/schema#"}}} as const
;
export { FindSimilar, GetContents, Search }