@RestController
@RequestMapping("/api")
public class QuizController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot Backend!";
    }
}