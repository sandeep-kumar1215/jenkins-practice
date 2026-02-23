
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")  // Important for React
public class QuizController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot Backend!";
    }
}