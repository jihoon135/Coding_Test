function solution(ineq, eq, n, m) {
    if(ineq === "<" && (eq === "=" || "!")){ //<= or <!
        return n <= m ? 1 : 0; 
    }
    else if(ineq === ">" && (eq === "=" || "!")){ //>= or >!
        return n >= m ? 1: 0;
    }
}

