
using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Rest;
using UlurumApi.Properties;
using Xunit;
using Xunit.Abstractions;

namespace UlurumTest
{
    public class BaseTest : IClassFixture<WebApplicationFactory<Startup>>
    {
        private readonly HttpClient _httpClient;
        private readonly ITestOutputHelper _testOutputHelper;
        
        public BaseTest(WebApplicationFactory<Startup> factory, ITestOutputHelper testOutputHelper)
        {
            _httpClient = factory.CreateClient();
            _testOutputHelper = testOutputHelper;
        }

        [Fact]
        public async Task dTest()
        {
            HttpResponseMessage response = await _httpClient.GetAsync("/api/users/1");
            _testOutputHelper.WriteLine(response.ToString());
           

        }
	
    }
}

