new Intl.NumberFormat(
    'en-US', {
        maximumSignificantDigits:3
    }).format('123456789')
    //123,000,000

new Intl.NumberFormat(
    'en-IN'.format('123456789'))
    //12,34,56,789

new Intl.NumberFormat('en-US',
{ natation:'compact'}).format('123456789')
    //123M

new Intl.NumberFormat(
    'en-US',{
        style:'percent'}).format(0.5)
    //50%