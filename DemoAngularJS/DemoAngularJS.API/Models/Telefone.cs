using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemosAngular.API.Models
{
    public class Telefone
    {
        public int Id { get; set; }
        public string Numero { get; set; }
        public int ClienteId { get; set; }
    }
}