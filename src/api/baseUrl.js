export default function getBaseUrl(){
  return getQueryStringParameterByName('useMockApi')?'http://localhost:3001/':'https://rocky-mesa-61413.herokuapp.com/';
}

function getQueryStringParameterByName(name, url) {
    if(!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);

    return results == null ? "" : decodeURIComponent(results[2].replace(/\+/g, " "));
}
