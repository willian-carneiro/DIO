package one.digitalinnovation.gof;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication // Inicializa a aplicacao Spring Boot
@EnableFeignClients  // ?
public class Application { // Classe principal do sistema, que inicializa tudo (vai chamar os controllers)
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
