package com.example.LinkedIn.Aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class ControllerLogging {

    private static final Logger LOGGER = LoggerFactory.getLogger(ControllerLogging.class);

    @Before("execution(* com.example.LinkedIn.Controller.*.*(..))")
    public void beforeMethodInController(JoinPoint joinPoint){
        Object args[] = joinPoint.getArgs();
        if(args.length > 0){
            for(Object arg:args){
                LOGGER.warn("Parameter received are : "+arg);
            }
        }
        LOGGER.warn("Method called before executing "+joinPoint.getSignature().getName());
    }

    @AfterReturning("execution(* com.example.LinkedIn.Controller.*.*(..))")
    public void afterReturningMethodInController(JoinPoint joinPoint){
        LOGGER.warn("Method called after returning "+joinPoint.getSignature().getName());
    }

    @AfterThrowing("execution(* com.example.LinkedIn.Controller.*.*(..))")
    public void afterThrowingMethodInController(JoinPoint joinPoint){
        LOGGER.warn("Method called afterThrowing "+joinPoint.getSignature().getName());
    }

    @After("execution(* com.example.LinkedIn.Controller.*.*(..))")
    public void afterMethodInController(JoinPoint joinPoint){
        LOGGER.warn("Method called after "+joinPoint.getSignature().getName());
    }

    @Around("execution(* com.example.LinkedIn.Controller.*.*(..))")
    public Object timeTaken(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        LOGGER.warn("Method called "+proceedingJoinPoint.getSignature().getName());

        long start = System.currentTimeMillis();

        Object obj = proceedingJoinPoint.proceed();

        long end = System.currentTimeMillis();

        LOGGER.warn("Time taken to execute "+proceedingJoinPoint.getSignature().getName()+" is "+(end-start));

        return obj;
    }
}
