package com.cardpay.train.services;

import com.cardpay.train.model.DBObject;
import com.cardpay.train.model.DBScheme;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Controller
@RequestMapping("/dbstats") // a version # for this services
public class DBStatsService
{
    private static List<DBScheme> dbSchemes = new ArrayList<DBScheme>();
    private static List<DBObject> dbObjects = new ArrayList<DBObject>();
    static
    {
//        .setId(UUID.randomUUID().toString());
        DBScheme scheme1 = new DBScheme();
        scheme1.setName("SYSTEM");
        scheme1.setSize("10000");
        dbSchemes.add(scheme1);

        DBScheme scheme2 = new DBScheme();
        scheme2.setName("MIGRATOR");
        scheme2.setSize("1234");
        dbSchemes.add(scheme2);
        int migrators = 150;
        while (migrators-- > 0)
            dbSchemes.add(scheme2);

        DBObject object1 = new DBObject();
        object1.setName("Table$Employees");
        object1.setSize("1235005");
        dbObjects.add(object1);

        DBObject object2 = new DBObject();
        object2.setName("Index$Employees");
        object2.setSize("77777");
        dbObjects.add(object2);

        DBObject object3 = new DBObject();
        object3.setName("Something$Employees");
        object3.setSize("888888");
        dbObjects.add(object3);
    }


//    /**
//     * Authenticate a user
//     *
//     * @return the authenticated user
//     */
//    @RequestMapping("/user/authenticate")
//    public User authenticateUser( HttpServletRequest request, HttpServletResponse response
//            , @RequestParam("email") String email
//            , @RequestParam("password") String password
//            , @RequestParam(value = "salt", required = false) String salt )
//    {
//
//        // return a new user object for the "authenticated" user
//        User user = new User();
//        user.setId("1");
//        user.setName(email.split("@")[0]);
//        user.setEmail(email);
//        return user;
//    }

    @RequestMapping("/scheme/list")
    public Collection<DBScheme> listSchemes(HttpServletRequest request, HttpServletResponse response, Principal principal)
    {
        return dbSchemes;
    }

    @RequestMapping("/object/list")
    public Collection<DBObject> listObjects(HttpServletRequest request, HttpServletResponse response, Principal principal)
    {
        return dbObjects;
    }
}