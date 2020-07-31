using System;

namespace Infrastructure.ErrorCollector
{ 
    public class Error {
        public ErrorType type { get; set; }
        public String message { get; set; }

        public Error(String message, ErrorType type) {
            this.type = type;
            this.message = message;
        }
    }  
}