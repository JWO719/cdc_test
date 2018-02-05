package de.jwo.library.endpoint;


import au.com.dius.pact.provider.junit.Consumer;
import au.com.dius.pact.provider.junit.PactRunner;
import au.com.dius.pact.provider.junit.Provider;
import au.com.dius.pact.provider.junit.VerificationReports;
import au.com.dius.pact.provider.junit.loader.PactBroker;
import au.com.dius.pact.provider.junit.loader.PactBrokerAuth;
import au.com.dius.pact.provider.junit.target.HttpTarget;
import au.com.dius.pact.provider.junit.target.Target;
import au.com.dius.pact.provider.junit.target.TestTarget;
import de.jwo.library.LibraryApplication;
import de.jwo.library.controller.BookController;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;

@RunWith(PactRunner.class) // Say JUnit to run tests with custom Runner
@Provider("book") // Set up name of tested provider
@Consumer("consumer-js") // Set up name of tested provider
@PactBroker(host = "opitzconsulting.pact.dius.com.au", protocol = "https", port="443",  authentication = @PactBrokerAuth(...))
@VerificationReports(value ={"console", "markdown", "json"}, reportDir = "/myreports")
public class BookTest {
    // NOTE: this is just an example of embedded service that listens to requests, you should start here real service
    @InjectMocks
    private BookController bookController = new BookController();

    private static ConfigurableApplicationContext application;


    //Create the MockMvcTarget with your controller and exception handler.  The third parameter, when set to true, will
    //print verbose request/response information for all interactions with MockMvc.

    @BeforeClass //Method will be run once: before whole contract test suite
    public static void setUpService() {
        //Run DB, create schema
        //Run service
        //...
    }
    //    public static final ClientDriverRule embeddedService = new ClientDriverRule(8332);

    //    @ClassRule //Rule will be applied once: before/after whole contract test suite
    @TestTarget
    public final Target target = new HttpTarget(8080);

    @Before //Method will be run before each test of interaction
    public void before() throws Exception {
        application = SpringApplication.run(LibraryApplication.class);
    }
    @AfterClass
    public static void kill(){
        application.stop();
    }



}
