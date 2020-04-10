﻿using UnityEngine;
using System.Collections;
using System.Diagnostics;
using System.IO;
using System;

public class Shell
{

    private static string SH_ROOT
    {
        get
        {
            return Application.dataPath + "/../../Tools/sh/";
        }
    }


    public static string sh_chmod_x
    {
        get
        {
            return SH_ROOT + "chmod_x.sh";
        }
    }




    public static string sh_tmp
    {
        get
        {
            return SH_ROOT + "tmp.sh";
        }
    }


	public static string sh_mexpect
	{
		get
		{
			return SH_ROOT + "mexpect.sh";
		}
	}

	public static string sh_minteract
	{
		get
		{
			return SH_ROOT + "minteract.sh";
		}
	}

	public static string sh_msend
	{
		get
		{
			return SH_ROOT + "msend.sh";
		}
	}

	public static string sh_mspawn
	{
		get
		{
			return SH_ROOT + "mspawn.sh";
		}
	}


    public static string sh_vertmp
    {
        get
        {
            return SH_ROOT + "tmp.sh";
        }
    }


    public static string txt_vertmp
    {
        get
        {
            return SH_ROOT + "tmp.txt";
        }
    }


    public static string sh_verres_git
    {
        get
        {
            return SH_ROOT + "verres_git.sh";
        }
    }

    public static string sh_verres_git_add_tag
    {
        get
        {
            return SH_ROOT + "verres_git_add_tag.sh";
        }
    }




    public static void processCommand(string command, string argument)
    {
        ProcessStartInfo start = new ProcessStartInfo(command);
        start.Arguments = argument;
        start.CreateNoWindow = true;
        start.ErrorDialog = true;
        start.UseShellExecute = false;
        if(start.UseShellExecute)
        {
            start.RedirectStandardOutput = false;
            start.RedirectStandardError = false;
            start.RedirectStandardInput = false;
        }
        else
        {
            start.RedirectStandardOutput = true;
            start.RedirectStandardError = true;
            start.RedirectStandardInput = true;
            start.StandardOutputEncoding = System.Text.UTF8Encoding.UTF8;
            start.StandardErrorEncoding = System.Text.UTF8Encoding.UTF8;
        }

        Process p = Process.Start(start);
        {
            if (!start.UseShellExecute)
            {
                printOutPut(p.StandardOutput);
                printOutPut(p.StandardError);
            }
        }
        p.WaitForExit();
        p.Close();
    }

    private static void printOutPut(StreamReader streamReader)
    {
        UnityEngine.Debug.Log(streamReader.ReadToEnd());
    }


	public static string PATH_GIT_LOCAL
	{
		get 
		{
			string path = Environment.GetFolderPath (Environment.SpecialFolder.LocalApplicationData).Replace("\\", "/") + "/Atlassian/SourceTree/git_local/";
			if(! Directory.Exists(path) )path = "C:/Program Files/Git/";
			return path;
		}
	}

	public static string PATH_BASH
	{
		get
		{
			#if UNITY_EDITOR_WIN
            if(File.Exists("C:/Program Files/Git/git-bash.exe"))
            {
                return "C:/Program Files/Git/git-bash.exe";
            }
			return PATH_GIT_LOCAL + "bin/bash.exe";
			#else
			return "/bin/bash";
			#endif
		}
	}

	public static string PATH_TERMINAL
	{
		get 
		{

			#if UNITY_EDITOR_WIN
			return PATH_GIT_LOCAL + "bin/bash.exe";
			#else
			return  "/Applications/Utilities/Terminal.app/Contents/MacOS/Terminal"; 
			#endif
		}
	}


    private static ShFile _tmp;
    public static ShFile tmp
    {
        get
        {
            if(_tmp == null)
                _tmp = new ShFile(Shell.sh_vertmp);

            return _tmp;
        }
    }

    public static void RunCode(string code, bool isPressExit = false)
    {
        tmp.Clear();
        tmp.WriteLine(code);

#if UNITY_EDITOR_WIN
        if (isPressExit)
        {
            tmp.WriteLine("read -n 1 -p 'Press any key to exit...' INP ");
            tmp.WriteLine("if [[ $INP != '' ]] ; then ");
            tmp.WriteLine("    echo -ne '\b \n' ");
            tmp.WriteLine("fi ");
        }
#endif
        tmp.Save();
        Shell.RunTmp(Shell.sh_tmp);
    }


    public static void RunCmd(string cmd)
    {
		System.Diagnostics.Process.Start(PATH_BASH, cmd);
    }


    public static void RunTmp(string sh)
    {
		System.Diagnostics.Process.Start(PATH_BASH, sh_chmod_x + " " + sh);
		Process p = System.Diagnostics.Process.Start(PATH_BASH, sh);
        p.WaitForExit();
        p.Close();
    }

	public static void RunFile(string sh, bool isWaitExit = false, bool isPressExit = false)
    {

		#if UNITY_EDITOR_WIN
		if (isPressExit)
		{
			StringWriter sw = new StringWriter ();
			sw.Write (File.ReadAllText (sh));
			sw.WriteLine ("read -n 1 -p 'Press any key to exit...' INP ");
			sw.WriteLine ("if [[ $INP != '' ]] ; then ");
			sw.WriteLine ("    echo -ne '\b \n' ");
			sw.WriteLine ("fi ");
			File.WriteAllText (sh, sw.ToString ());
		}
		#endif

		Loger.Log (PATH_BASH);
		System.Diagnostics.Process.Start(PATH_BASH, sh_chmod_x + " " + sh);
		string command = PATH_BASH; 
        Process p = System.Diagnostics.Process.Start(command, sh);
        if (isWaitExit)
        {
            p.WaitForExit();
            p.Close();
        }
    }


    public static void RevealInFinder(string path)
    {
        path = Path.GetFullPath(path);

        path = path.Replace("\\", "/");
        if (path.StartsWith("Asssets/") || path.StartsWith("./") || path.StartsWith("../"))
        {
            path = Application.dataPath.Replace("Assets", "/") + path;
        }


        path = path.Replace("//", "/");

#if UNITY_EDITOR_OSX
    System.Diagnostics.Process.Start( "/usr/bin/open", "-R " + path);

#elif UNITY_EDITOR_WIN
        path = path.Replace("/", "\\");
        System.Diagnostics.Process.Start("Explorer.exe", "/select, \"" + path + "\"");
        UnityEngine.Debug.Log("Explorer.exe /select, \"" + path + "\"");
#endif
    }

    public static void ShowInExplorer(string path)
    {
        path = Path.GetFullPath(path);
        path = path.Replace("//", "/");
        System.Diagnostics.Process.Start("Explorer.exe", "/select, \"" + path + "\"");
    }




}

