package microservices.book.multiplication.domin;

public class Multiplication {

    // 인수
    private int factorA;
    private int factorB;

    // 결과
    private int result;

    public Multiplication(int factorA, int factorB) {
        this.factorA = factorA;
        this.factorB = factorB;
        this.result = factorA * factorB;
    }

    
}