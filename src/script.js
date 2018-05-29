function openTab() {

  var textJson = '{ "links": [' +
    '"https://careers.virginmedia.com/job-search?s_Keywords=&s_FriendlyRegion=London",' +
    '"https://lifeatexpedia.com/jobs/?location=London%20-%20United%20Kingdom",' +
    '"https://jobs.ebayinc.com/search-jobs/London,%20England/403/4/2635167-6269131-2648110-2643743/51x50853/-0x12574/50/2",' +
    '"https://www.reed.co.uk/jobs/jobs-in-london?keywords=portuguese",' +
    '"https://workingatbooking.com/vacancies/?filter-searchphrase=&filter-city%5B%5D=london"' +
  ']' +
'}'
        var linkJson = JSON.parse(textJson);

        const links = linkJson.links;

        const arrayLength = links.length;
        for (var i = 0; i < arrayLength; i++) {

          var link = links[i];
          console.log(link);

          window.open(link, '_blank');
          window.focus()
        }

  }