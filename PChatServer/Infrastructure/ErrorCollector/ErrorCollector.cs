using System;
using System.Linq;
using System.Collections.Generic;

namespace Infrastructure.ErrorCollector
{
    public class ErrorCollector {

        private ICollection<Error> errors;

        public ErrorCollector() {
            init();
        }

        private void init() {
            this.errors = new List<Error>();
        }

        public void add (String message, ErrorType type) {
            this.errors.Add(new Error(message, type));
        }

        public ICollection<Error> GetErrors() {
            ICollection<Error> result = new List<Error>();
            foreach(Error error in errors) {
                result.Add(error);
            }
            init();
            return result;
        }
    }
}