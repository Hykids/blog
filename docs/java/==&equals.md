# Object 类

## == 和 equal

### ‘==’运算符

’==‘可以比较**基本类型**和**引用对象**。基本数据类型的话,比较二者的**值**是否相同。

```java
	int a = 10;
    double b = 10.0;
     System.out.println(a == b);
```

如果比较对象是引用类型，则比较二者引用的对象是否是同一个，即比较两者指向的地址是否相同。

```
String a = 'asd';
String b = a;

System.out.ptintln(a == b); //true
```



### equals

​	equals是定义在Object类中的方法，用于比较**对象**的引用地址是否相同。而Java所有的类都继承自Object类，因此所有类都可以使用equals方法。可以根据需求重写方法。有些Java类（String,Integer,Double）重写了方法，使其比较的是值内容而非引用。

​	Object类的equals:

```java
pubulic Boolean equals(Object aobjact){
    return (this == aobject); 
}
```



### 注意

在 Java 中，`char` 类型和 `int` 类型可以进行比较，因为 `char` 类型是整数类型的子类型。

```java
char charValue = 'A';
int intValue = 65;

// char类型和int类型可以比较
boolean isEqual = (charValue == intValue);

System.out.println(isEqual); // Output: true

```

## hashcode()

Object类的方法。将对象的地址转换为哈希值返回。但是不等于对象的地址。

指向同一个对象的引用哈希值相同。

## toString()

返回对象的类名+包名@hashcode()

```java
public String toString() {
    return getClass().getName() + "@" + Integer.toHexString(hashCode());
}

```

许多类重写了这一方法。

String中调用返回字符串内容。Ingeter调用返回整数的字符串形式，ArrayList返回数组包含元素的字符串。

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // 创建一个ArrayList并添加元素
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Orange");

        // 使用toString()方法打印ArrayList的字符串表示
        String listString = list.toString();

        System.out.println(listString); // Output: [Apple, Banana, Orange]
    }
}

```

## finalize方法

​	在需要释放对象（文件）所占资源时，系统会自动调用finalize()方法。子类可重写方法。

### 什么时候对象会销毁？

​	当对象无引用或者置空的时候，垃圾回收器就会销毁/回收对象。在销毁对象前，会调用finalize()方法。

### 适用业务场景

​	数据里连接，打开文件。