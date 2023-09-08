---
isTimeLine: true
title: 防抖与节流实现
author: Aldur
tags:
  - 学习笔记
  - 基础知识
categories:
  - 基础知识
---

# Java 基础 <Badge type='warning' text="未完待续" />

:::warning ✍️
速通中
:::

## Interface

一组未实现的方法抽象封装起来。

有其他类要使用的时候，再根据具体情况将方法写出来。

- JDK 8.0 后接口中可以有静态方法和默认方法，意味着接口中可以有方法的默认实现，也就是方法体（默认方法需要 default 修饰

::: details

JDK 7.0 之前接口中都是抽象方法，无方法体.

:::

- 在接口中抽象方法可以省略 abstract 方法
- 接口中的属性，只能是final.(public static final)

```java
interface ExampleInterface {
    int MAX_VALUE = 100; // 接口中定义的常量，类自动继承常量属性

    void someMethod();
}

class ExampleClass implements ExampleInterface {
    @Override
    public void someMethod() {
        // 实现类中可以访问接口中的常量
        System.out.println("The max value is: " + MAX_VALUE);
        // 无法修改接口中的常量的值，下面代码会报错
        // MAX_VALUE = 200;
    }
}

```

- 实现接口的类必须实现接口中声明的**抽象**方法
- 一个类/接口可以实现**多个接口**，接口不能继承其他类

![image-20230725082520972](./../public/img/image-20230725082841963.png)

- 类不可以缩小接口方法的访问权限

```java
interface ExampleInterface {
    void doSomething();
}

public class ExampleClass implements ExampleInterface {

    // This is valid, as it matches the accessibility of the interface method.
    public void doSomething() {
        // Implementation code
    }

    // 无效，缩小了接口方法的访问权限，报错
    // private void doSomething() {
    //     // Implementation code
    // }
}

```



## 代码块

### 基本语法

[修饰符]{

}

### 特点

​	在构造器加载**之前**被加载，**每调用**一次构造器，代码块就会加载一次。

​	在对象实例被创建时，会隐式调用。

​	调用类的静态成员时，普通代码块不会执行

### 静态代码块

static {

}

随着类的加载而加载。只会**执行一次**。

### 类什么时候加载

1.创建对象实例时

2.子类对象实例被创建时，父类也会加载

3.类静态成员被访问时

### 创建一个对象

调用顺序：

1. 静态属性初始化和静态代码块调用
2. 普通代码块和普通属性初始化
3. 调用构造方法

```java
public class StaticCodeBlock {
    public static void main(String[] args) {
        A a = new A();
//        B b = new B(2233);

    }
}

class B {
    private int bb;

    public B() {
        System.out.println("桀桀桀，我是无参构造器,子类创造实例调用");
    }

    public B(int bb) {
        System.out.println("我是有参");
        this.bb = bb;
    }
}

class A extends B{
//    private static int m1 = getM1();
    static {
        System.out.println("我是A静态代码块");
    }

    public A() {
        System.out.println("我最后调用，小垃圾");
    }

    private static int m1 = getM1();
    public static int getM1(){
        System.out.println("我是静态属性m1");
        return 10;
    }
}

```

![image-20230723100114269](./../public/img/image-20230723100114269.png)

原因：

- 静态的成员的代码块在类加载时已经执行完毕
- 在创建对象时，会先调用父类的构造方法

- 构造器的前面，隐含了普通代码块的调用和 super()

### 父子类调用顺序（面试题）

1. 父类静态成员初始化，静态代码块执行
2. 子类静态成员初始化，静态代码块执行
3. 父类普通代码块调用，普通成员初始化
4. 父类构造器调用
5. xxxxxxxxxx class A {    int count = 10;​    public int sum(){        return count + 10;    }​    public sum1(){        return sum()+count;    }}​class B extends A {    int count = 20;​    public int sum(){        return count + 20;    }}​class demo{    static public void main(String[] args){​        A a = new B();​        a.sum();//40        a.sum1();//50​    }}java
6. 子类构造方法

注意：

静态代码块只能调用静态成员。

普通代码块可以调用任意成员。



## 内部类

类的五大成员：属性、方法、构造器、代码块、内部类

特点：

​	**直接**访问外部类的**私有属性**

分类：

定义在外部类局部位置（方法中）

+ 局部内部类
+ **匿名内部类**

定义在外部类成员位置

+ 成员内部类
+ 静态内部类

### 局部内部类

```java
class OutClass {
    private int n1 = 100;
    public void m1(){
        class Inner{
            public void m2(){
                System.out.println("我直接访问私有变量："+n1);
            }
        }
    }
}
```

+ 定义在方法/代码块中
+ 不能使用访问修饰符（final除外，相当于局部变量。final可以修饰局部变量

**作用域**：在定义它的方法和代码块中。

**访问方法**：创建对象，再访问

```java
public class InnerClass01 {
    public static void main(String[] args) {

       OutClass outClass = new OutClass();
       outClass.m1();

    }
}

class OutClass {
    private int n1 = 100;
    public void m1(){
        class Inner01{
            public void m2(){
                System.out.println("我直接访问私有变量："+n1);
            }
        }
        // 必须再作用域内
        Inner01 inner01= new Inner01();
        inner01.m2();
    }
}
```

### 匿名内部类

​	创建一个简单的类并且不想为其命名时，可以使用匿名内部类。匿名内部类是一种没有名字的**局部类**，它通常用于**实现接口**或继**承一个类**，并且只需要在一个地方使用，只能使用一次。

​	基本用法如下：

```java
public class AnonymouslnnerClass {
    public static void main(String[] args) {
        // 创建一个实现MyInterface接口的匿名内部类
        MyInterface myInterface = new MyInterface() {
            @Override
            public void Giao() {
                System.out.println("Giaogiaogiao.");
            }
        };

        // 调用匿名内部类的方法
        myInterface.Giao();
    }
}

interface MyInterface {
    void Giao();
}
```

​	在上例中，myInterface的编译类型是MyInterface，**运行类型是匿名内部类**

​	匿名内部类在系统底层会分配名称，当使用System.*out*.println("运行类型"+myInterface.getClass());输出如下：

![image-20230725095157760](./../public/img/image-20230725095157760.png)

​	JDK底层创建了内部类AnonymousClass$1后，立即创建了实例并返回了地址给myInterface。

#### 使用场景

​	匿名内部类本质是对象。可以直接当实参传递。

```java
public class AnonymouslnnerClass {
    public static void main(String[] args) {
       Phone phone = new Phone();
        // 相当于传进去了一个实现Bell接口的匿名内部类
       phone.alarmClock(new Bell() {
           @Override
           public void ring() {
               System.out.println("I am a coconut~");
           }
           // 重写接口方法
       });
    }
}

class Phone {
    // 编译类型是Bell,运行类型是匿名内部类
    void alarmClock(Bell bell){
        bell.ring();
    }
}
interface Bell {
    void ring();
}
```

### 成员内部类

* 定义在外部成员位置
* 无static修饰
* 可以访问外部类**所有属性**，包括私有
* 访问时，在外部类创建对象，再调用方法

### 静态内部类

* static 修饰
* 可以访问外部类的所有静态成员，非静态不能直接访问（new一个实例
* 其他同其他内部类

## 异常处理机制

异常体系图

以下为常见异常

![image-20230727083253585](./../public/img/image-20230727083253585.png)

​	Java异常体系分为Error和Exception,都继承于Throwable类。

​	Error指的是致命错误，是无法通过异常机制来解决的，程序会直接挂掉。常见的有栈溢出和内存不足。

​	Exception又分为运行异常和编译异常,**编译异常**一般发生在网络，数据库和文件中，**必须处理**，否则程序无法运行。**运行异常**，要是不处理**默认throw**。常见见上图。

### 异常处理

当异常发生时，对异常的处理方式。当出现异常时，能够保证程序不会崩溃（健壮性。

1. try-catch-finally

```java
try{
	// 可能出错的代码
}catch(Exception e)
{
	/**
    When an exception occurs, it will be encapsulated
    as an Exception object，passing to catch
    */
}finally{
	//不管异常有没有被处理，都会执行finally块
}
```

​	拿到Excetion对象后，可自己处理异常。

```java
public class exception_ {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = 0;
        String inputStr = "";
        while(true){
            System.out.println("输入整数：");
            inputStr = scanner.next();
            try{
                num = Integer.parseInt(inputStr);
                break;
            }catch (NumberFormatException e){
                System.out.println("输入的不是整数!");
            }
        }
        System.out.println("输入整数是"+num);
    }
}
```

2. throws

![image-20230727092000697](./../public/img/image-20230727092000697.png)

一路向上 throw，像不像你踢皮球的物业

要是一直不处理,throw到了JVM。JVM处理异常方式：输出异常信息，退出程序:bomb:

如果没有显示调用trycatch，默认throws。

* throw的异常类型可以是产生的异常类型，也可以是它的父类

* 当一个方法中可能产生某种异常，并且不确定如何处理该异常，可以选择抛出给方法的调用者来处理

* 子类重写父类方法，抛出的异常 要和父类一直，或者是父类异常的子类

* throw可以抛出多个异常

    ```JAVA
     public void function() throws FileNotFoundException {
        //让调用F1方法的调用者来处理
            FileInputStream file = new FileInputStream("d://aa.txt")
        }
    }
    ```

### 自定义异常

​	定义一个类，继承**Exception**或者**RuntimeException**。

```java
public class CustomException {
    public static void main(String[] args) {
        int age = 36;
        if(!(age>=18&&age<=35)){
            throw new AgeException("年龄不正确，需要18~35,你被优化辣");
            // throw是手动生成异常关键字，在方法体中调用
        }
        System.out.println("正确");
    }
}

class AgeException extends RuntimeException{
    public AgeException(String message){
    super(message);
}}

```

效果如下：

![image-20230727101825826](./../public/img/image-20230727101825826.png)

## Colletation type(2d)

### 框架体系

Java 集合， 也叫作容器，主要是由两大接口派生而来：一个是 `Collection`接口，主要用于存放单一元素；另一个是 `Map` 接口，主要用于存放**键值对**。

集合分为双列集合（键值对）和单列集合。Colletion的子接口List,Set都是单列集合。

![image-20230728094914281](./../public/img/image-20230728094914281.png)

Map接口的实现子类，存放的是键值对，也就是双列集合。

![image-20230728095441386](./../public/img/image-20230728095441386.png)

### ArrayList

## 多线程

线程：操作系统调度的最小单位

进程：系统资源分配和拥有的最小单位

### 线程创建

创建线程有以下两种方式：

1. 继承Thread类

```java
class MyThread extends Thread{
    @Override
    public void run() {
        System.out.println("实现Running接口");
    }
}
```



2. 实现Runnable接口

```java
public class ThreadMethod01 {
    public static void main(String[] args) {
        MyThread myThread =new MyThread();
        // myThread.start()无法调用
        // 创建一个Thread，将继承Runnable的对象放入
        Thread thread = new Thread(myThread);
        thread.start();
    }
}

class MyThread implements Runnable{
    @Override
    public void run() {
        System.out.println("实现Running接口");
    }
}
```

### 线程运行

创建一个线程时候，想要运行，需要调用start()方法。如果调用的是run(),相当于调用了一个普通方法，而不是开启线程。

### Thread Method

线程常用方法演示

```java
public class ThreadMethod01 {
    public static void main(String[] args) throws InterruptedException {
        MyThread myThread =new MyThread();
        myThread.setName("这是什么？吃一口");
        // 线程命名
        myThread.setPriority(Thread.MIN_PRIORITY);
        // 设置优先级
        myThread.start();

        for(int i = 0;i<5;i++){
            Thread.sleep(1000);
            System.out.println("hi"+i);
        }

        myThread.interrupt();// 休眠中断

    }
}

class MyThread extends Thread {
    @Override
    public void run() {
        while (true) {
            for (int i = 0;i<10;i++){
                System.out.println(Thread.currentThread().getName()+i);
            }
            try {
                System.out.println("睡大觉zzz");
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                // InterruptedException 捕获到一个终端异常
                System.out.println("睡醒接着吃，我吃吃吃吃吃吃吃");
            }
        }

    }
}
```

### 线程插

**yield**：线程让出cpu，让其他线程执行，让出时间不确定，也不一定成功。

**join:**  线程插队。插队的线程一旦插队成功，则先执行完线程的所有任务。

### 线程状态

![Lightbox](./../public/img/Lifecycle-and-States-of-a-Thread-in-Java-768.png)

**Blocked**: 等待进入同步代码块的锁，获得锁后进入runable state

## IO流(2d)

文件流：文件在程序中以流的形式来操作的。

创建文件的三种方式

```

```



## JDBC(3d)

## 反射与类加载(2d)

