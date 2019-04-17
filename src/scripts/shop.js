$('#category').change(function (e) {
    openpayUtils.modifySearchParams({CategoryID: e.currentTarget.value});
    openpayUtils.searchBrands();
});

$('#city').change(function (e) {
    openpayUtils.modifySearchParams({SuburbName: e.currentTarget.value});
    openpayUtils.searchBrands();
});

$('#query').change(function (e) {
    openpayUtils.modifySearchParams({Keyword: e.currentTarget.value});
    openpayUtils.searchBrands();
});

$('#search-btn').click(function () {
    openpayUtils.searchBrands();
});

$('#categories-grid').on('click', '.marketToProvide', function (e) {
    var CategoryID = $(e.currentTarget).data('value');

    if (CategoryID) {
        openpayUtils.modifySearchParams({CategoryID: CategoryID});
        openpayUtils.searchBrands();
        $("#category").val(CategoryID);
    }
});
$('#all').click(openpayUtils.handleChangeRetailerAvailability);
$('#online').click(openpayUtils.handleChangeRetailerAvailability);
$('#in-store').click(openpayUtils.handleChangeRetailerAvailability);
$('#load-more').click(function () {
    openpayUtils.searchBrands({loadMore: true})
});

$(document).ready(function () {
    openpayUtils.populateControls();
    var currentParams = openpayUtils.parseParams(location.search.substring(1));

    var shouldSearch = Object.keys(currentParams)
        .filter(function (key) {
            return !!currentParams[key];
        })
        .length > 0;

    if (shouldSearch) {
        openpayUtils.searchBrands();
    } else {
        $('#search-results').hide();
    }
});
