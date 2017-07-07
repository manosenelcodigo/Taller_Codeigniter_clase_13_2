<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller 
{
    public function __construct()
    {
        parent::__construct();
        $this->layout->setLayout("frontend");
    }
    
    
	public function index()
	{
		$this->layout->view("index");
	}
    public function peticion()
    {
        $this->layout->setLayout("ajax");
        $this->layout->view('peticion');
    }
    public function peticion2()
    {
        if($this->input->post())
        {
            $this->layout->setLayout("ajax");
            $valor=$this->input->post('valor1');
            $valor2=$this->input->post('id');
            $this->layout->view('peticion2',compact('valor','valor2'));
        }else
        {
            show_404();
        }
    }
}
