package de.jwo.library.endpoint;

import io.restassured.module.mockmvc.RestAssuredMockMvc;
import de.jwo.library.controller.BookController;
import org.junit.Before;

public class BookBase {

    @Before
    public void setup() {
        RestAssuredMockMvc.standaloneSetup(new BookController());
    }

}
