package microservices.book.multiplication.service;

import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class RandomGeneratorServiceImpl implements RandomGeneratorService {

    final static int MAXINUM_FACTOR = 99;
    final static int MININUM_FACTOR = 11;

    @Override
    public int generateRandomFactor() {
        return new Random().nextInt((MAXINUM_FACTOR-MININUM_FACTOR) + 1) + MININUM_FACTOR;
    }
}
