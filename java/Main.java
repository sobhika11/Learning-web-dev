import java.util.*;
class Customer{
    private int customer_id;
    private String name;
    private String address;
    private long phone_number;

    Customer(String name,String address,long phone_number){
        this.phone_number=phone_number;
        this.name=name;
        this.address=address;
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public long getPhone_number() {
        return phone_number;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public void setPhone_number(long phone_number) {
        this.phone_number = phone_number;
    }
    

}
public class Main{
    public static void main(String[] args) {
        Customer c1=new Customer("sobhi", "cbe", 843843);
        System.out.println(c1.getName());
    }
}