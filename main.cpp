#include "httplib.h"

#include <map>
#include <string>

httplib::Server svr;
std::map<std::string, std::string> map;
std::mutex map_mutex;

int main(int argc, char **argv)
{
    svr.Get(R"(/get/(.+))", [](const httplib::Request &req, httplib::Response &res) {
        auto k = req.matches[1].str();
        if (map.contains(k))
        {
            res.set_content(map[k], "text/plain");
        }
        else
        {
            res.status = 404;
            res.set_content("not found", "text/plain");
        }
    });

    svr.Put(R"(/set/(.+))", [](const httplib::Request &req, httplib::Response &res) {
        auto k = req.matches[1].str();
        const std::lock_guard<std::mutex> lock(map_mutex);
        map[k] = req.body;
        res.set_content("OK: " + k, "text/plain");
    });

    std::cout << "Sever started at http://127.0.0.1:7020/";
    svr.listen("127.0.0.1", 7020);
}