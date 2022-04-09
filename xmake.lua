target("stupid-kv")
    set_kind("binary")
    set_languages("c++20")
    add_files("main.cpp") 
    if is_os("linux") then
        add_syslinks("pthread")
    end