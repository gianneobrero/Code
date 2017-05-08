using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ImportExcelToTableMVC.Models;
using OfficeOpenXml;
using System.Web.Hosting;
using Microsoft.Office;


namespace ImportExcelToTableMVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            
            return View();
        }



        public ActionResult Upload(FormCollection formCollection)
        {

            try
            {
                if (Request != null)
                {
                    HttpPostedFileBase file = Request.Files["UploadedFile"];
                    if ((file != null) && (file.ContentLength > 0) && !string.IsNullOrEmpty(file.FileName))
                    {
                        string fileName = file.FileName;
                        string fileContentType = file.ContentType;
                        byte[] fileBytes = new byte[file.ContentLength];
                        var data = file.InputStream.Read(fileBytes, 0, Convert.ToInt32(file.ContentLength));
                        var usersList = new List<Users>();
                        using (var package = new ExcelPackage(file.InputStream))
                        {
                            var currentSheet = package.Workbook.Worksheets;
                            var workSheet = currentSheet.First();
                            var noOfCol = workSheet.Dimension.End.Column;
                            var noOfRow = workSheet.Dimension.End.Row;

                            for (int rowIterator = 1; rowIterator <= noOfRow; rowIterator++)
                            {
                                var user = new Users();
                                user.FirstName = workSheet.Cells[rowIterator, 1].Value.ToString();
                                user.LastName = workSheet.Cells[rowIterator, 2].Value.ToString();
                                user.ID = workSheet.Cells[rowIterator, 3].Value.ToString();
                                user.Title = workSheet.Cells[rowIterator, 4].Value.ToString();

                                usersList.Add(user);
                            }
                        }
                        ViewBag.ListUsers = usersList;

                    }
                }
                return View("DisplayData");
            }
            catch(Exception e) {
                Console.WriteLine(e.ToString());
                return View("Error");
            }
        }


    }
}